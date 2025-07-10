package com.bellmin;

import com.amazonaws.services.kms.AWSKMS;
import com.amazonaws.services.kms.AWSKMSClientBuilder;
import com.amazonaws.services.kms.model.DecryptRequest;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayV2HTTPEvent;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class EmailSender implements RequestHandler <APIGatewayV2HTTPEvent, String>{

    private static final ObjectMapper objectMapper = new ObjectMapper();

    private static final String accessKey = decryptKey("NCP_ACCESS_KEY");
    private static final String secretKey = decryptKey("NCP_SECRET_KEY");
    private static final String receiver = decryptKey("RECEIVER_ADDRESS");

    public record Email (String sender, String name, String subject, String text) { }

    @Override
    public String handleRequest(APIGatewayV2HTTPEvent event, Context context) {

        try{
            Email email = objectMapper.readValue(event.getBody(), Email.class);
            return send(email.name(), email.sender(), email.subject(), email.text());
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    private String send(String name, String sender, String subject, String text) {
        try (HttpClient client = HttpClient.newHttpClient();){
            long timeStamp = System.currentTimeMillis();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://mail.apigw.ntruss.com/api/v1/mails"))
                    .header("Content-Type", "application/json")
                    .header("x-ncp-apigw-timestamp", String.valueOf(timeStamp))
                    .header("x-ncp-iam-access-key", accessKey)
                    .header("x-ncp-apigw-signature-v2", createSignature("POST", "/api/v1/mails", timeStamp))
                    .POST(BodyPublishers.ofByteArray(createPayload(sender, name, subject, text, receiver)))
                    .build();

            HttpResponse<String> response = client.send(request, BodyHandlers.ofString(Charset.defaultCharset()));
            System.out.println(response.statusCode());
            System.out.println(response.body());
            return response.statusCode()+":"+response.body();
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    private static byte[] createPayload(String sender,
                                        String name,
                                        String subject,
                                        String content, String receiver){
        String body = """
                {
                    "senderAddress" : "%s",
                    "senderName" : "%s",
                    "title" : "%s",
                    "body" : "%s",
                    "recipients" : [{
                        "address" : "%s",
                        "type" : "R"
                    }]
                }
                """;


        return String.format(body, sender, name, subject, content, receiver).getBytes(StandardCharsets.UTF_8);
    }

    private static String createSignature(String method, String uri, long timestamp) throws Exception{
        String space = " ";
        String newLine = "\n";

        String message = method
                + space
                + uri
                + newLine
                + timestamp
                + newLine
                + accessKey;

        SecretKeySpec signingKey = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(signingKey);

        byte[] rawHmac = mac.doFinal(message.getBytes(StandardCharsets.UTF_8));

        return Base64.getEncoder().encodeToString(rawHmac);
    }

    private static String decryptKey(String keyName) {
        System.out.println("Decrypting key");
        byte[] encryptedKey = Base64.getDecoder().decode(System.getenv(keyName));
        Map<String, String> encryptionContext = new HashMap<>();
        encryptionContext.put("LambdaFunctionName",
                System.getenv("AWS_LAMBDA_FUNCTION_NAME"));

        AWSKMS client = AWSKMSClientBuilder.defaultClient();

        DecryptRequest request = new DecryptRequest()
                .withCiphertextBlob(ByteBuffer.wrap(encryptedKey))
                .withEncryptionContext(encryptionContext);

        ByteBuffer plainTextKey = client.decrypt(request).getPlaintext();
        return new String(plainTextKey.array(), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}