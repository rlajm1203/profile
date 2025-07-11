// src/constants/projects.js

export const PROJECTS = [
  {
    id: 1,
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
    viewLink: "#",    // TODO: 실제 프로젝트 URL로 교체
    githubLink: "#"  // TODO: 실제 GitHub 레포로 교체
  },
  {
    id: 2,
    title: "Econo-Recruit",
    semiTitle: "동아리 리크루팅 플랫폼",
    detail: `
    Econovation 동아리의 신입 회원 모집 플랫폼입니다.
    `,
    imageSrc: "/static/project/econo-recruit.svg",
    year: "2024.07 ~ NOW",
    role: "back-end developer",
    description: `1. 짧은 기간 내 코드베이스를 빠르게 이해하여 프로젝트 전반 구조를 파악하여 업무 적응
                  2. FSM 패턴을 적용하여 합/불 상태관리 시스템 도입 및 구현
                  3. 이벤트 기반 합/불 메일링 자동화 시스템 구현
                  4. 이메일 발송 시 DB Connection Timeout 문제 해결`,
    viewLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
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
    viewLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
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
    githubLink: "#"
  }
];
