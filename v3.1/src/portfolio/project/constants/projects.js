// src/constants/projects.js

// TODO: Project detail description 채우기
export const PROJECTS = [
  {
    id: 1,
    title: "Whoz-In",
    semiTitle: "wi-fi 기반 동아리방 재실 확인 시스템",
    detail: `Wi-Fi 기술을 기반으로 하는
            동아리방 재실 인원 현황 확인 서비스 입니다.
    `,
    imageSrc: "/static/project/whozIn.svg",
    year: "2024.09 ~ 2025.03",
    role: "back-end developer",
    description: `1. mDNS, ARP 프로토콜을 활용한 동아리방 재실 현황 알고리즘 설계 및 구현
                  2. Let's Encrypt를 활용한 SSL 적용으로 인한 AWS 서버 비용 감축
                  3. Spring Security 도입 및 Filter Chain 설정 고급화
                  4. 가독성과 유지보수를 위한 클린 아키텍처 및 CQRS 적용
                  5. 도메인 로직 보호를 위한 도메인 중심 설계 적용`,
    viewLink: "#",
    githubLink: "https://github.com/JNU-econovation/Whoz-In-BE",
    detailDescription: [
      {
        title: `mDNS, ARP 프로토콜을 활용한 동아리방 재실 현황 알고리즘 설계 및 구현`,
        description:`
#### 문제 1 : Wifi 기반 재실 탐지를 위해, 사용자와 기기 정보 매핑이 필요한 문제.

#### 해결 과정
1.WireShark의 CLI 버전인 Tshark 프로세스를, ProcessBuilder를 사용하여 자식 프로세스로 생성
2.tShark 프로세스는 ARP, mDNS 프로토콜 패킷의 IP,MAC 주소를 추출하여 출력 스트림으로 전달
2.애플리케이션에서 Non Blocking BufferedReader 와 연결하여, tShark 프로세스의 출력 스트림을 통해 데이터를 수집
3.데이터가 일정량 이상 쌓일 경우, 데이터베이스에 저장
4.이후 사용자가 자신의 IP와 함께 기기등록 요청을 보내면, 수집된 MAC 주소를 조회하여, MAC 주소와 MemberID 매핑
        

#### 문제 2 : 기기 등록이 완료된 사용자에 대해서, 실시간으로 재실 확인 수단이 필요한 문제.

#### 해결 과정
1.네트워크 랜카드의 Monitor 모드 적용
2.ProcessBuilder를 사용하여, tShark가 Monitor 모드의 네트워크 랜카드로,목적지 주소에 상관 없이 공기 중에 떠다니는 Wifi 패킷 수집하도록 설정
3.수집된 Monitor 모드 패킷을 불러온 후, 현재 사용자의 기기와 일치하는 MAC 주소가 존재한다면 해당 사용자를 재실 처리
4.수집된 Monitor 모드 패킷을 불러온 후, 사용자의 MAC 주소가 존재하지 않는다면 해당 MAC 주소가 10분 이상 접속을 하지 않았을 경우 퇴실 처리`,
        imageSrc : "/static/project/whozin-device-register.png"
      },
      {
        title: `Spring Security 도입 및 Filter Chain 설정 고급화`,
        description: `테스트 입니다.`
      },
      {
        title: `Let's Encrypt를 활용한 SSL 적용으로 인한 AWS 서버 비용 감축`,
        description: `
        문제 : AWS Application LoadBalancer를 사용한 SSL 인증서 적용 시, 많은 비용 청구 문제

        해결
        1. Let's Encrypt를 사용한 Web Root 방식의 SSL 인증서 설치
        2. 애플리케이션 서버 앞단에, nginx 프록시를 배치하여 SSL 적용
        `
      },
      {
        title: `가독성과 유지보수를 위한 클린 아키텍처 및 CQRS 적용`,
        description: `테스트 입니다.`
      },
      {
        title: `도메인 로직 보호를 위한 도메인 중심 설계 적용`,
        description: `테스트 입니다.`
      }
    ]
  },
  {
    id: 2,
    title: "Econo-Recruit",
    semiTitle: "동아리 리크루팅 플랫폼",
    detail: `Econovation 동아리의 신입 회원 모집 플랫폼입니다.
    `,
    imageSrc: "/static/project/econo-recruit.svg",
    year: "2024.07 ~ NOW",
    role: "back-end developer",
    description: `1. 짧은 기간 내 코드베이스를 빠르게 이해하여 프로젝트 전반 구조를 파악하여 업무 적응
                  2. FSM 패턴을 적용하여 합/불 상태관리 시스템 도입 및 구현
                  3. 이벤트 기반 합/불 메일링 자동화 시스템 구현
                  4. 이메일 발송 시 DB Connection Timeout 문제 해결`,
    viewLink: "#",
    githubLink: "https://github.com/JNU-econovation/econo-recruit",
    detailDescription: [
      {
        title: `짧은 기간 내 코드베이스를 빠르게 이해하여 프로젝트 전반 구조를 파악하여 업무 적응`,
        description: `테스트 입니다.`
      },
      {
        title: `FSM 패턴을 적용하여 합/불 상태관리 시스템 도입 및 구현`,
        description: `테스트 입니다.`
      },
      {
        title: `이벤트 기반 합/불 메일링 자동화 시스템 구현`,
        description: `테스트 입니다.`
      },
      {
        title: `이메일 발송 시 DB Connection Timeout 문제 해결`,
        description: `테스트 입니다.`
      }
    ]
  },
  {
    id: 3,
    title: "EEOS",
    semiTitle: "동아리 행사 관리 시스템",
    detail: `Econovation Event Operating System 의 약자로
            에코노베이션 동아리의 행사 관리 및 출석 체크 시스템입니다.`,
    imageSrc: "/static/project/eeos.svg",
    year: "2024.03 ~ NOW",
    role: "back-end developer",
    description: `1. 짧은 기간 내 코드베이스를 빠르게 이해하여 프로젝트 전반 구조를 파악하여 업무 적응
                  2. Redis Delayed Queue를 활용한 출석체크 예약기능 구현
                  3. Tree 구조를 활용한, 댓글/답글 구조 모델링`,
    viewLink: "https://www.eeos.econovation.kr",    // TODO: 실제 프로젝트 URL로 교체
    githubLink: "https://github.com/JNU-econovation/EEOS-BE",  // TODO: 실제 GitHub 레포로 교체
    detailDescription: [
      {
        title: `짧은 기간 내 코드베이스를 빠르게 이해하여 프로젝트 전반 구조를 파악하여 업무 적응`,
        description: `테스트 입니다.`
      },
      {
        title: `Redis Delayed Queue를 활용한 출석체크 예약기능 구현`,
        description: `Redis Sorted Set 자료구조를 사용하여, 각 행사가 종료되는 Timestamp 값을 Score로 사용하였습니다.
                      
                      다른 도메인에서도 특정 Task를 예약할 수 있도록 Delayed Queue 클래스를 정의하여 추상화 하였습니다.`,
        img : "url"
      },
      {
        title: `Tree 구조를 활용한, 댓글/답글 구조 모델링`,
        description: `행사 조회 페이지에서, 댓글과 `,
        img : "url"
      }
    ]
  },
  {
    id: 4,
    title: "ABAS",
    semiTitle: "농업 빅데이터 분석 웹 사이트",
    detail: `농업에 대한 빅데이터의
            데이터 분석, 데이터 시각화, 데이터 예측과 같은
            기능을 수행하는 AI 기반 웹 사이트입니다.`,
    imageSrc: "/static/project/abas.svg",
    year: "2024.07 ~ 2025.06",
    role: "back-end developer",
    description: `1. 본인 인증을 위한 이메일/문자 인증 설계 및 구현 (Naver SMS, Google SMTP)
                  2. 구아바 캐시를 활용하여 효율적인 메모리 사용의 인증번호 관리 기능 구현`,
    viewLink: "https://fe.dev.abas.life",
    githubLink: "#",
    detailDescription: [
      {
        title: `본인 인증을 위한 이메일/문자 인증 설계 및 구현 (Naver SMS, Google SMTP)`,
        description: `테스트 입니다.`
      },
      {
        title: `구아바 캐시를 활용하여 효율적인 메모리 사용의 인증번호 관리 기능 구현`,
        description: `테스트 입니다.`
      }
    ]
  }
];
