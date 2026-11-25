/* ============================================================
   🇰🇷 한국어 (원본)
   - 링크, 기술 스택, 연도, 수상 여부 같은 공통 정보는 이 파일에서만 고치면
     영어·일본어 페이지에도 그대로 반영됩니다.
   - 문장을 고치면 en.js, ja.js의 같은 항목도 함께 고쳐 주세요.
     (프로젝트는 id로, 경력·수상은 순서로 짝지어집니다)
   ============================================================ */
window.LANG = window.LANG || {};

const UI_KO = {
  htmlLang: "ko",
  title: "양다원 | Developer Portfolio",
  eyebrow: "FULL-STACK DEVELOPER",
  heroTitle: "화면부터 서버까지<br />만드는 개발자 <em>양다원</em>입니다.",
  heroLead: "사용자가 보는 화면과 그 뒤에서 동작하는 API를 함께 만듭니다.",
  btnProjects: "프로젝트 보기 →",
  btnResume: "이력서 링크",
  btnPdf: "이력서 PDF 다운로드",
  contactTitle: "함께 만들 서비스가 있다면",
  contactText: "언제든 편하게 연락 주세요.",
  contactResume: "이력서 보기",
  contactPdf: "PDF 다운로드",
  filterAll: "전체",
  filterAward: "수상작",
  nowTag: "재학 중",
  awardBadge: "🏆 수상",
  whatIDid: "What I did",
  effortDefault: "노력",
  hard: "어려움",
  effort: "노력",
  result: "성과",
  github: "GitHub →",
};

const TIMELINE = [
  { date: "2026.03 – 2026.08", title: "UMC 10th Android 파트장", sub: "Node.js Challenger 병행" },
  { date: "2025.09 – 2026.08", title: "학술 동아리 DC&M 회장", sub: "한성대학교 컴퓨터공학부" },
  { date: "2025.09 – 2026.02", title: "UMC 9th WEB Challenger", sub: "NECT 프론트엔드" },
  { date: "2025.03 – 2025.09", title: "UMC 8th Android Challenger", sub: "" },
  { date: "2025.03 – 2025.09", title: "학술 동아리 DC&M 부회장", sub: "" },
  { date: "2024.09 –", title: "학술 동아리 DC&M", sub: "한성대학교 컴퓨터공학부 · Member" },
  { date: "2024.09 –", title: "학술 소모임 BUG", sub: "한성대학교 컴퓨터공학부 · Member" },
  { date: "2024.03 – Present", title: "한성대학교 컴퓨터공학부", sub: "Mobile SW 트랙", now: true },
];

const SKILLS = {
  "Frontend": ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand", "TanStack Query"],
  "Backend": ["Spring Boot", "Java", "Node.js", "Express", "Prisma", "FastAPI", "Python"],
  "Mobile": ["Android", "Kotlin", "Expo"],
  "Database & Cloud": ["MySQL", "AWS EC2", "Firebase", "GitHub Actions"],
  "Design & Tools": ["Figma", "Photoshop", "Illustrator", "Git", "Vite"],
};

/* 프로젝트
   meta: 기간 · 팀 · 담당 / did: 한 일 / effort: 노력 (없으면 빈 배열) */
const PROJECTS = [
  {
    emoji: "🍽️", id: "findish", name: "Findish", year: 2026, period: "2026.01 – 2026.06", award: true,
    desc: "AI 맛집 추천 · 예약 서비스 (캡스톤)",
    intro: "자연어로 원하는 식당을 찾고, AI 요약과 비교 분석, 친구와 함께 쓰는 AI 추천(AI Pick)을 거쳐 예약 · 주문까지 이어지는 맛집 서비스입니다.",
    meta: "팀 5명 · 백엔드 API 전체 개발 · AWS 배포",
    did: [
      { text: "Spring Boot로 서비스 백엔드 REST API 47개를 설계 · 구현", sub: [
        "인증: JWT 자체 로그인, Google OAuth, 토큰 재발급, 구글 캘린더 연동",
        "서비스: 식당 · 리뷰 조회, 예약 가능 시간 조회와 예약 확정, 장바구니 · 주문, 친구, AI 추천 프리셋",
      ] },
      "서비스 배포를 위해 AWS EC2 서버 구성 · 운영, 미국 리전에서 서울 리전으로 옮기는 인프라 이전 과정 경험",
    ],
    effortTitle: "어려웠던 점 → 노력 → 성과",
    effort: [
      { title: "AI 개인화 추천이 동작하지 않는 문제",
        hard: "사용자가 좋아요를 눌러도 취향 벡터가 저장되지 않아 AI Pick이 개인화 추천을 하지 못함",
        effort: "DB를 직접 조회하며 저장 과정을 추적해, SQLAlchemy가 JSON 컬럼 내부 변경을 감지하지 못해 commit이 반영되지 않는 원인을 찾고 flag_modified로 해결",
        result: "취향 벡터가 정상 저장되어 개인화 추천 동작 (vectorActive: true)" },
      { title: "두 DB 사이의 데이터 불일치",
        hard: "서비스 DB(EC2 PostgreSQL)에는 있는 회원이 AI 서버용 DB(Supabase)에는 없어, 기존 계정은 취향을 저장할 수 없음",
        effort: "Spring Boot에 두 번째 데이터소스를 연결하고, 로그인 · 회원가입 · 구글 로그인 시점에 Supabase 사용자를 자동 생성하는 upsert 로직 추가",
        result: "기존 계정과 신규 계정 모두 AI 추천 기능을 사용할 수 있게 됨" },
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Supabase", "Redis", "JWT", "Google OAuth", "Swagger", "AWS EC2"],
    link: "https://github.com/SinseonSeolnongtang",
  },
  {
    emoji: "🔍", id: "goodmon", name: "굿모니터링", year: 2026, period: "2026.09 – 2026.11", award: false,
    desc: "지자체 캐릭터 IP를 무단으로 쓴 상품을 찾아내는 모니터링 플랫폼",
    meta: "AI/클라우드 온캠퍼스 인턴십 · 팀장 · 상품 데이터 수집 담당",
    did: [
      "쿠팡 상품·판매자 사업자정보 수집 자동화",
      "승인 사업자 대조, 정가 기준 가격 이상 탐지로 의심 상품 골라내기",
      "매일 자동 수집, Gemini로 신고문 초안 생성",
    ],
    effort: [
      "쿠팡이 Selenium, requests, Playwright 모두 봇 차단(Akamai)으로 막히는 것을 하나씩 직접 확인한 뒤, 외부 스크래핑 API(Apify)로 방식을 바꿔 수집을 자동화",
      "네이버는 로그인 차단과 쇼핑 검색 API 종료로 자동 수집이 불가능해, 꿈돌이 상품 약 230건을 직접 수집해 데이터를 확보",
    ],
    stack: ["Python", "MySQL", "Apify", "Gemini API"],
    link: "https://github.com/HSU-Oncampus-Internship",
  },
  {
    emoji: "🔗", id: "nect", name: "NECT", year: 2026, period: "2025.12 – 2026.02", award: false,
    desc: "창작자를 위한 프로젝트 팀원 매칭 플랫폼",
    meta: "UMC 9기 Web · 프론트엔드 4명 · 홈, 메인, 매칭 화면 담당",
    did: [
      "공통 헤더, 메인(랜딩) 페이지, 홈 화면, 목록 더보기 페이지 구현 및 API 연동",
      "매칭 흐름 구현: 사용자의 프로젝트 매칭 신청, 리더가 넥터에게 프로젝트를 골라 매칭 요청 (선택 → 확인 → 완료 · 취소 · 한도 초과 모달)",
      "아이디어를 입력하면 분석 리포트를 받는 아이디어 분석 페이지 구현",
    ],
    effort: [
      "리더 매칭 요청 기능을 만들 때 새 코드를 처음부터 짜지 않고, 팀이 이미 만든 매칭 훅을 재사용하고 필요한 조회 API와 훅만 추가해 코드 중복을 줄임",
    ],
    stack: ["React 19", "TypeScript", "Vite", "TailwindCSS", "TanStack Query", "Zustand", "Axios", "Swiper.js"],
    link: "https://github.com/UMC-NECT/Nect-Web",
  },
  {
    emoji: "🎯", id: "eclips", name: "E-Clips", year: 2025, period: "2025.03 – 2025.09", award: true,
    desc: "강의 영상을 숏폼으로 바꿔 주는 AI 학습 앱",
    meta: "팀 5명 (프론트 2, 백엔드·AI 3) · 팀장 · 모바일 프론트엔드 담당",
    did: [
      "하단 내비게이션과 앱 전체 화면 흐름 구성",
      "마이 페이지, 강의실, 퀴즈, 성적 예측·분석 화면 개발",
      "화면 단위로 이슈와 브랜치를 나눠 개발",
      "연구 내용을 논문으로 정리해 DigiCon-25 학술대회에서 발표",
    ],
    effort: [
      "처음 만든 React Native 앱이자 처음 팀장을 맡은 프로젝트",
      "일정에 쫓겨 AI 서버와의 API 연동을 끝까지 맞추지 못한 경험에서, 개발 초반에 프론트와 서버가 API 형식을 먼저 맞춰야 한다는 것을 배움 → 이후 프로젝트에서는 직접 API를 만들고 명세서를 작성하는 역할까지 맡음",
    ],
    stack: ["React Native", "Expo", "TypeScript"],
    link: "https://github.com/2-Clips",
  },
  {
    emoji: "🤝", id: "alliswell", name: "All is Well", year: 2025, period: "2025.09 – 2025.12", award: true,
    desc: "자연어로 패널을 찾아 주는 RAG 검색 시스템",
    meta: "팀 4명 · 풀스택: UI 디자인·프론트엔드, 로그인·검색 API 담당 (RAG 파이프라인은 AI 팀원 담당)",
    did: [
      "UI 디자인 및 프론트엔드 개발",
      "FastAPI 백엔드 API 개발: 로그인, 자연어 검색, 검색 결과 다운로드, 패널 상세",
      "AI 파이프라인과 API를 연결해 검색 결과와 그룹 공통 페르소나를 화면에 제공",
    ],
    effort: [
      "같은 검색어를 다시 검색하면 기록이 계속 새로 쌓이던 문제를, 저장 전에 같은 검색어가 있는지 확인하고 있으면 검색 시간만 갱신하도록 서버 로직을 고쳐 해결",
      "프론트와 백엔드를 모두 맡아, 화면에 필요한 데이터를 API에서 직접 맞춰 줌",
    ],
    stack: ["React", "TypeScript", "Vite", "TanStack Query", "Zustand", "Tailwind CSS", "Chart.js", "FastAPI"],
    link: "https://github.com/fourEdiots",
  },
  {
    emoji: "🛤️", id: "path", name: "우리가 걸어갈 길", year: 2025, period: "2025.02 – 2025.04", award: true,
    desc: "시골 버스 정류장의 고령자용 AI 챗봇 키오스크",
    meta: "2025 시스코 이노베이션 챌린지 장려상 · 팀 5명 · 사용자 화면 초기 UI 디자인 · 개발",
    did: [
      "고령 사용자를 위한 정류장 화면의 초기 UI 디자인 및 구현 (세로형), 이후 Webex 연동 과정에서 팀원이 가로형으로 재구성",
    ],
    effortTitle: "배운 점 · 성과",
    effort: [
      "편입 후 처음 참가한 공모전으로, 당시에는 API 연동을 몰라 회의 내용을 다 따라가지 못했음. 이 경험을 계기로 API 연동과 서버까지 공부하기 시작함",
      "프로젝트를 통해 React 처음 사용, 시스코 이노베이션 장려상 수상",
    ],
    stack: ["React", "JavaScript"],
    link: "https://github.com/HSU-ThePathWeAreGoingToWalk",
  },
  {
    emoji: "🥔", id: "gng", name: "Go, Not Go", year: 2025, period: "2025.09 – 2025.12", award: false,
    desc: "여러 사람이 함께 쓰는 실시간 일정 · 준비물 관리 서비스",
    meta: "웹프레임워크 수업 · 팀 4명 · UI 디자인 · 프론트엔드",
    did: [
      "서비스 전체 UI 디자인",
      "결제 페이지와 지도 API 기반 이벤트 페이지 개발",
      "백엔드 연동",
    ],
    effort: [],
    stack: ["React", "JavaScript"],
    link: "https://github.com/web-framework-1-potato-wedges",
  },
  {
    emoji: "🏥", id: "drbe", name: "Dr.Be", year: 2025, period: "2025.12", award: false,
    desc: "RAG 기반 질병별 전문의 추천 및 진료 정보 통합 시스템",
    meta: "크롤링 · 프론트엔드 담당",
    did: ["의료 정보 크롤링 및 프론트엔드 개발"],
    effort: [],
    stack: ["Python", "Beautiful Soup", "Selenium"],
    link: "https://github.com/Doctor-Be",
  },
  {
    emoji: "🎮", id: "whatisme", name: "What Is Me?", year: 2025, period: "2025.11 ~ 2025.12", award: false,
    desc: "키워드 추리 게임",
    meta: "UI 디자인 · 게임 로직 담당",
    did: ["UI 디자인, 메인·게임 방법 화면 및 전반적인 게임 로직 구현"],
    effort: [],
    stack: ["Java", "Swing", "Figma"],
    link: "https://github.com/TeamGonNyong",
  },
  {
    emoji: "👔", id: "onfit", name: "Onfit", year: 2024, period: "2024", award: false,
    desc: "스타일을 기록하고 연결하는 스마트 옷장 앱",
    meta: "Android 프론트엔드 담당",
    did: ["옷장·검색 필터·아이템 추가·옷 상세 화면 구현", "캘린더 메인, 스타일별 outfit 화면 구현"],
    effort: [],
    stack: ["Kotlin", "Android"],
  },
  {
    emoji: "📍", id: "flow", name: "Flow", year: 2024, period: "2024", award: false,
    desc: "Find Location, Optimize Way — 지도 기반 경로 최적화 앱",
    meta: "",
    did: [],
    effort: [],
    stack: [],
  },
];

const AWARDS = [
  { year: 2026, name: "Findish", sub: "AI 맛집 추천 · 예약 서비스 (캡스톤)", kind: "🏆 우수 작품상 수상" },
  { year: 2025, name: "E-Clips", sub: "AI-Powered Educational Platform · DigiCon-25 논문 발표", kind: "🏆 2025 한이음 드림업 프로젝트 장려상 수상" },
  { year: 2025, name: "오늘은 어디 가시나요?", sub: "Location-Based Service", kind: "🏆 2025 시스코 이노베이션 챌린지 장려상 수상" },
  { year: 2025, name: "All is Well", sub: "RAG-Based Panel Search", kind: "🏆 2025학년도 2학기 한성 SW 중심대학 페스티벌 우수상 수상" },
  { year: 2025, name: "MEDISON", sub: "Medical Innovation", kind: "🥈 창의 융합 역량 경진대회 - 아이디어 부문 대상" },
  { year: 2025, name: "AIPDND", sub: "AI Service", kind: "🥈 창의 융합 역량 경진대회 - 아이디어 부문 장려상" },
  { year: 2022, name: "웹디자인기능사", sub: "한국산업인력공단 · 2022.09.24 취득", kind: "📜 자격증" },
];

window.LANG.ko = { UI: UI_KO, TIMELINE, SKILLS, PROJECTS, AWARDS };