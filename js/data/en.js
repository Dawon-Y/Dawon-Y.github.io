/* ============================================================
   🇺🇸 English
   - 문장만 들어 있어요. 링크·기술 스택·연도는 ko.js에서 가져옵니다.
   - 프로젝트는 id로, TIMELINE·AWARDS는 ko.js와 같은 순서로 짝지어집니다.
   ============================================================ */
window.LANG = window.LANG || {};

window.LANG.en = {
  UI: {
    htmlLang: "en",
    title: "Dawon Yang | Developer Portfolio",
    eyebrow: "FULL-STACK DEVELOPER",
    heroTitle: "Hi, I'm <em>Dawon Yang</em>.<br />I build from screen to server.",
    heroLead: "I build the screens users see and the APIs that run behind them.",
    btnProjects: "View Projects →",
    btnResume: "Resume Link",
    btnPdf: "Download Resume PDF",
    contactTitle: "Let's build something together",
    contactText: "Feel free to reach out anytime.",
    contactResume: "View Resume",
    contactPdf: "Download PDF",
    filterAll: "All",
    filterAward: "Awarded",
    nowTag: "Enrolled",
    awardBadge: "🏆 Award",
    whatIDid: "What I did",
    effortDefault: "Approach",
    hard: "Challenge",
    effort: "Approach",
    result: "Result",
    github: "GitHub →",
  },

  TIMELINE: [
    { title: "UMC 10th Android Part Leader", sub: "Also a Node.js Challenger" },
    { title: "President, DC&M Academic Club", sub: "Dept. of Computer Engineering, Hansung University" },
    { title: "UMC 9th Web Challenger", sub: "NECT frontend" },
    { title: "UMC 8th Android Challenger", sub: "" },
    { title: "Vice President, DC&M Academic Club", sub: "" },
    { title: "DC&M Academic Club", sub: "Dept. of Computer Engineering, Hansung University · Member" },
    { title: "BUG Study Group", sub: "Dept. of Computer Engineering, Hansung University · Member" },
    { title: "Hansung University, Computer Engineering", sub: "Mobile SW Track" },
  ],

  PROJECTS: [
    {
      id: "findish",
      desc: "AI restaurant recommendation & reservation service (Capstone)",
      intro: "A restaurant service where users search in natural language, get AI summaries and comparisons, use AI Pick together with friends, and go all the way to reservation and ordering.",
      meta: "Team of 5 · Built the entire backend API · AWS deployment",
      did: [
        { text: "Designed and implemented 47 REST APIs with Spring Boot", sub: [
          "Auth: JWT login, Google OAuth, token refresh, Google Calendar integration",
          "Service: restaurant & review lookup, available time lookup and booking, cart & orders, friends, AI recommendation presets",
        ] },
        "Set up and operated AWS EC2 servers for deployment; went through migrating the infrastructure from a US region to the Seoul region",
      ],
      effortTitle: "Challenge → Approach → Result",
      effort: [
        { title: "AI personalized recommendations not working",
          hard: "Taste vectors were not saved when users liked a restaurant, so AI Pick couldn't personalize recommendations",
          effort: "Traced the save flow by querying the DB directly, found that SQLAlchemy wasn't detecting in-place changes to a JSON column so the commit wasn't applied, and fixed it with flag_modified",
          result: "Taste vectors are saved correctly and personalized recommendations work (vectorActive: true)" },
        { title: "Data mismatch between two databases",
          hard: "Users in the service DB (PostgreSQL on EC2) didn't exist in the AI server's DB (Supabase), so existing accounts couldn't save their preferences",
          effort: "Connected a second datasource to Spring Boot and added upsert logic that creates the Supabase user on login, sign-up, and Google login",
          result: "Both existing and new accounts can use AI recommendations" },
      ],
    },
    {
      id: "goodmon",
      name: "Good Monitoring",
      desc: "Monitoring platform that finds products using local government character IP without permission",
      meta: "AI/Cloud On-Campus Internship · Team Lead · Product data collection",
      did: [
        "Automated collection of Coupang products and seller business information",
        "Flagged suspicious products by checking approved sellers and detecting prices far below list price",
        "Daily automated collection; generated draft infringement reports with Gemini",
      ],
      effort: [
        "Confirmed one by one that Selenium, requests, and Playwright were all blocked by Coupang's bot protection (Akamai), then switched to an external scraping API (Apify) to automate collection",
        "Naver couldn't be collected automatically due to login blocking and the shutdown of its shopping search API, so I manually collected about 230 Kkumdori products to secure the data",
      ],
    },
    {
      id: "nect",
      desc: "Team-matching platform for creators' projects",
      meta: "UMC 9th Web · 4 frontend developers · Home, main, and matching screens",
      did: [
        "Built the shared header, main (landing) page, home screen, and \"see more\" list pages with API integration",
        "Implemented matching flows: users applying to a project, and leaders picking one of their projects to send a match request to a Necter (select → confirm → done / cancel / limit-exceeded modals)",
        "Built the idea analysis page that returns a report for an entered project idea",
      ],
      effort: [
        "For the leader match-request feature, reused the team's existing matching hooks instead of writing new code from scratch, adding only the query APIs and hooks it needed to reduce duplication",
      ],
    },
    {
      id: "eclips",
      desc: "AI learning app that turns lecture videos into short-form content",
      meta: "Team of 5 (2 frontend, 3 backend/AI) · Team Lead · Mobile frontend",
      did: [
        "Set up the bottom navigation and the overall screen flow of the app",
        "Built My Page, classroom, quiz, and grade prediction/analysis screens",
        "Split work into issues and branches per screen",
        "Wrote up the research as a paper and presented it at the DigiCon-25 conference",
      ],
      effort: [
        "My first React Native app and my first time as a team lead",
        "Short on time, we couldn't fully finish the API integration with the AI server. I learned that frontend and server should agree on API formats early → in later projects I built APIs and wrote the API specs myself",
      ],
    },
    {
      id: "alliswell",
      desc: "RAG-based search system that finds panels from natural language",
      meta: "Team of 4 · Full-stack: UI design & frontend, login & search APIs (RAG pipeline by an AI teammate)",
      did: [
        "UI design and frontend development",
        "Built FastAPI backend APIs: login, natural-language search, result download, panel details",
        "Connected the AI pipeline to the APIs to show search results and shared group personas",
      ],
      effort: [
        "Repeated searches kept piling up duplicate history entries; fixed the server logic to check for the same query before saving and only update its search time",
        "Handled both frontend and backend, so I could shape the API data to exactly what each screen needed",
      ],
    },
    {
      id: "path",
      name: "The Path We'll Walk",
      desc: "AI chatbot kiosk for older adults at rural bus stops",
      meta: "2025 Cisco Innovation Challenge, Honorable Mention · Team of 5 · Initial UI design & development of the user screen",
      did: [
        "Designed and built the initial (portrait) UI of the bus stop screen for older users; a teammate later reworked it into landscape during the Webex integration",
      ],
      effortTitle: "What I learned · Result",
      effort: [
        "My first competition after transferring. I didn't know API integration back then and couldn't fully follow our meetings, which led me to start studying API integration and servers",
        "First time using React; won Honorable Mention at the Cisco Innovation Challenge",
      ],
    },
    {
      id: "gng",
      desc: "Real-time schedule & packing list service shared by a group",
      meta: "Web Framework course · Team of 4 · UI design & frontend",
      did: [
        "Designed the entire service UI",
        "Built the payment page and a map-API-based event page",
        "Integrated with the backend",
      ],
    },
    {
      id: "drbe",
      desc: "RAG-based system that recommends specialists by disease and gathers medical information",
      meta: "Crawling & frontend",
      did: ["Crawled medical information and built the frontend"],
    },
    {
      id: "whatisme",
      desc: "Keyword guessing game",
      meta: "UI design & game logic",
      did: ["UI design, main and how-to-play screens, and the overall game logic"],
    },
    {
      id: "onfit",
      desc: "Smart closet app for recording and sharing styles",
      meta: "Android frontend",
      did: ["Built closet, search filter, add item, and item detail screens", "Built the calendar main and outfit-by-style screens"],
    },
    {
      id: "flow",
      desc: "Find Location, Optimize Way — map-based route optimization app",
    },
  ],

  AWARDS: [
    { name: "Findish", sub: "AI restaurant recommendation & reservation (Capstone)", kind: "🏆 Excellence Award" },
    { name: "E-Clips", sub: "AI-Powered Educational Platform · Presented at DigiCon-25", kind: "🏆 2025 Hanium Dream-Up Project, Honorable Mention" },
    { name: "Where Are You Going Today?", sub: "Location-Based Service", kind: "🏆 2025 Cisco Innovation Challenge, Honorable Mention" },
    { name: "All is Well", sub: "RAG-Based Panel Search", kind: "🏆 Hansung SW-Centered University Festival (Fall 2025), Excellence Award" },
    { name: "MEDISON", sub: "Medical Innovation", kind: "🥈 Creative Convergence Competition, Idea Category Grand Prize" },
    { name: "AIPDND", sub: "AI Service", kind: "🥈 Creative Convergence Competition, Idea Category Honorable Mention" },
    { name: "Craftsman Web Design", sub: "HRD Korea · Acquired 2022.09.24", kind: "📜 Certification" },
  ],
};