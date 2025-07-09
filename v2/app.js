const urlMap = {
    contact : {
        "contact-me" : null,
        "velog" : "https://velog.io/@rlajm1203",
        "github" : "https://github.com/rlajm1203",
        "linkedIn" : "https://www.linkedin.com/in/%EC%A2%85%EB%AF%BC-%EA%B9%80-9274a9284/",
    },
    projects : {
        "eeos" : {
            prod : "https://www.eeos.econovation.kr",
            github : "https://github.com/JNU-econovation/EEOS-BE"
        },
        "econo-recruit" : {
            prod : null,
            github : "https://github.com/JNU-econovation/econo-recruit"
        },
        "whoz-in" : {
            prod : null,
            github : "https://github.com/JNU-econovation/Whoz-In-BE"
        },
        "abas" : {
            prod : "https://fe.dev.abas.life",
            github : null
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
        const url = urlMap.contact[id];
        
        element.addEventListener('click', (e) => {
            navigateTo(url);  
        })
    }
}

const projectsClickEvent = () => {
    const projectNames = ['eeos', 'econo-recruit', 'abas', 'whoz-in'];
    const projectView = '-view-project';
    const projectGithub = '-github';

    for(id of projectNames){    
        const elementView = document.getElementById(id+projectView);
        const elementGithub = document.getElementById(id+projectGithub);
        const url = urlMap.projects[id];

        elementView.addEventListener('click', (e)=>{
            navigateTo(url.prod);
        });

        elementGithub.addEventListener('click', (e)=>{
            navigateTo(url.github);
        });
    }
}

const navigateTo = (url) => {
    if(url===null){
        alert("현재는 지원하지 않습니다.");
        return;
    }
    window.open(url);
}

smoothScroll();
contactClickEvent();
projectsClickEvent();