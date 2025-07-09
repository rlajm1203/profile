const sendEmailModal = document.getElementById("email-modal");
const actionMap = {
    contact : {
        "velog" : () => navigateTo("https://velog.io/@rlajm1203"),
        "github" : () => navigateTo("https://github.com/rlajm1203"),
        "linkedIn" : () => navigateTo("https://www.linkedin.com/in/%EC%A2%85%EB%AF%BC-%EA%B9%80-9274a9284/"),
    },
    projects : {
        "eeos" : {
            prod : () => navigateTo("https://www.eeos.econovation.kr"),
            github : () => navigateTo("https://github.com/JNU-econovation/EEOS-BE")
        },
        "econo-recruit" : {
            prod : ()=>nonAction(),
            github : () => navigateTo("https://github.com/JNU-econovation/econo-recruit")
        },
        "whoz-in" : {
            prod : ()=>nonAction(),
            github : () => navigateTo("https://github.com/JNU-econovation/Whoz-In-BE")
        },
        "abas" : {
            prod : () => navigateTo("https://fe.dev.abas.life"),
            github : ()=>nonAction()
        }
    }
}

const smoothScroll = () => {
    document.querySelectorAll('.header-menu a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        });
    });
}

const contactClickEvent = () => {
    const ids = ['velog', 'github', 'linkedIn'];
    
    for(id of ids){
        const element = document.getElementById(id);
        const action = actionMap.contact[id];
        
        element.addEventListener('click', (e) => action())
    }
}

const projectsClickEvent = () => {
    const projectNames = ['eeos', 'econo-recruit', 'abas', 'whoz-in'];
    const projectView = '-view-project';
    const projectGithub = '-github';

    for(id of projectNames){    
        const elementView = document.getElementById(id+projectView);
        const elementGithub = document.getElementById(id+projectGithub);
        const prodAction = actionMap.projects[id].prod;
        const githubAction = actionMap.projects[id].github;

        elementView.addEventListener('click', (e)=>prodAction());
        elementGithub.addEventListener('click', (e)=>githubAction());
    }
}

const contactAction = () => {
    if(sendEmailModal.hidden){
        openModal();
        return;
    }

    closeModal();
}

const openModal = () => {
    sendEmailModal.hidden = false;
    // document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    sendEmailModal.hidden = true;
}

const nonAction = () => {
    alert("현재는 지원하지 않습니다.");
}

const navigateTo = (url) => {
    if(url===null){
        alert("현재는 지원하지 않습니다.");
        return;
    }
    window.open(url);
}

const sendEmail = () => {
    const senderName = document.getElementById("sender-name");
    const senderEmail = document.getElementById("sender-email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    console.log(senderName);
    console.log(senderEmail);
    console.log(subject);
    console.log(message);
    
}

smoothScroll();
contactClickEvent();
projectsClickEvent();