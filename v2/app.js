const actionMap = {
    contact : {
        "contact-me" : ()=>openModal(),
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
    const ids = ['contact-me', 'velog', 'github', 'linkedIn'];
    
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

const openModal = () => {
    const modal = document.getElementById('email-modal');
    const overay = document.getElementById('email-modal-overay');

    modal.hidden = false;
    overay.hidden = false;
    // document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    const modal = document.getElementById('email-modal');
    const overay = document.getElementById('email-modal-overay');

    modal.hidden = true;
    overay.hidden = true;
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

document.getElementById('email-modal-overay').addEventListener('click', ()=>closeModal());
smoothScroll();
contactClickEvent();
projectsClickEvent();