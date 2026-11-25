/* ============================================================
   렌더링 — data/ko.js, en.js, ja.js 내용을 화면에 그립니다.
   ============================================================ */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const LANGS = ["ko", "en", "ja"];

/* ko.js를 기본으로, 고른 언어의 문장을 덮어씌웁니다.
   - 프로젝트는 id로, 경력·수상은 같은 순서끼리 짝지어요. */
function getData(lang) {
  const base = window.LANG.ko;
  const tr = window.LANG[lang];
  if (lang === "ko" || !tr) return base;
  const byId = Object.fromEntries((tr.PROJECTS || []).map((p) => [p.id, p]));
  return {
    UI: { ...base.UI, ...tr.UI },
    SKILLS: tr.SKILLS || base.SKILLS,
    TIMELINE: base.TIMELINE.map((t, i) => ({ ...t, ...(tr.TIMELINE || [])[i] })),
    PROJECTS: base.PROJECTS.map((p) => ({ ...p, ...(byId[p.id] || {}) })),
    AWARDS: base.AWARDS.map((a, i) => ({ ...a, ...(tr.AWARDS || [])[i] })),
  };
}

let D = null;          // 지금 언어의 데이터
let filter = "all";    // 프로젝트 필터

/* 프로젝트 카드 안의 목록 */
const didItem = (x) => typeof x === "string"
  ? `<li>${esc(x)}</li>`
  : `<li>${esc(x.text)}<ul class="sub">${x.sub.map((y) => `<li>${esc(y)}</li>`).join("")}</ul></li>`;
const effortItem = (x) => typeof x === "string"
  ? `<li>${esc(x)}</li>`
  : `<li><b>${esc(x.title)}</b><ul class="sub">
       <li><em>${esc(D.UI.hard)}</em> ${esc(x.hard)}</li>
       <li><em>${esc(D.UI.effort)}</em> ${esc(x.effort)}</li>
       <li><em>${esc(D.UI.result)}</em> ${esc(x.result)}</li></ul></li>`;

function renderProjects() {
  const list = D.PROJECTS.filter((p) =>
    filter === "all" ? true : filter === "award" ? p.award : String(p.year) === filter);
  $("#project-grid").innerHTML = list.map((p) => `
    <article class="card">
      <div class="card-top">
        <span class="card-emoji">${p.emoji}</span>
        <div class="card-meta">
          ${p.award ? `<span class="badge award">${esc(D.UI.awardBadge)}</span>` : ""}
          <span class="badge">${esc(p.period || p.year)}</span>
        </div>
      </div>
      <h3>${esc(p.name)}</h3>
      <p class="desc">${esc(p.desc)}</p>
      ${p.intro ? `<p class="intro">${esc(p.intro)}</p>` : ""}
      ${p.meta ? `<p class="role">${esc(p.meta)}</p>` : ""}
      ${p.stack && p.stack.length ? `<p class="tech"><b>Tech</b> ${p.stack.map(esc).join(", ")}</p>` : ""}
      ${p.did && p.did.length ? `<div class="block"><h4>${esc(D.UI.whatIDid)}</h4><ul>${p.did.map(didItem).join("")}</ul></div>` : ""}
      ${p.effort && p.effort.length ? `<div class="block effort"><h4>${esc(p.effortTitle || D.UI.effortDefault)}</h4><ul>${p.effort.map(effortItem).join("")}</ul></div>` : ""}
      ${p.link ? `<a class="link" href="${p.link}" target="_blank" rel="noopener">${esc(D.UI.github)}</a>` : ""}
    </article>`).join("");
}

function renderFilters() {
  const items = [["all", D.UI.filterAll], ["award", D.UI.filterAward], ["2026", "2026"], ["2025", "2025"], ["2024", "2024"]];
  $("#filters").innerHTML = items.map(([key, label]) =>
    `<button class="filter${key === filter ? " active" : ""}" data-f="${key}">${esc(label)}</button>`).join("");
}

function render(lang) {
  D = getData(lang);

  // 고정 문구
  document.documentElement.lang = D.UI.htmlLang;
  document.title = D.UI.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = D.UI[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = D.UI[el.dataset.i18nHtml]; });
  document.querySelectorAll("#langSwitch button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

  $("#timeline").innerHTML = D.TIMELINE.map((t) => `
    <div class="tl-item reveal">
      <div class="tl-date">${esc(t.date)}</div>
      <div class="tl-title">${esc(t.title)}${t.now ? `<span class="tag-now">${esc(D.UI.nowTag)}</span>` : ""}
        ${t.sub ? `<small>${esc(t.sub)}</small>` : ""}</div>
    </div>`).join("");

  $("#skills-grid").innerHTML = Object.entries(D.SKILLS).map(([k, v]) => `
    <div class="skill-card reveal"><h3>${esc(k)}</h3>
      <div class="chips">${v.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
    </div>`).join("");

  renderFilters();
  renderProjects();

  $("#award-list").innerHTML = D.AWARDS.map((a) => `
    <div class="award-row reveal">
      <span class="yr">${a.year}</span>
      <span class="nm">${esc(a.name)}<small>${esc(a.sub)}</small></span>
      <span class="kind">${esc(a.kind)}</span>
    </div>`).join("");

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

/* 스크롤 등장 애니메이션 */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.1 });

/* 언어: 주소의 ?lang= → 저장된 값 → 한국어 순서로 정해요 */
function setLang(lang, push) {
  if (!LANGS.includes(lang)) lang = "ko";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  if (push) {
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }
  render(lang);
}
let startLang = new URLSearchParams(location.search).get("lang");
if (!startLang) { try { startLang = localStorage.getItem("lang"); } catch (e) {} }
setLang(startLang || "ko", false);

$("#langSwitch").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (b) setLang(b.dataset.lang, true);
});
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter"); if (!b) return;
  filter = b.dataset.f;
  renderFilters();
  renderProjects();
});

$("#year").textContent = new Date().getFullYear();

/* 테마 */
const root = document.documentElement, btn = $("#themeBtn");
function setTheme(t) {
  root.dataset.theme = t; btn.textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
let savedTheme = null; try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
setTheme(savedTheme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
btn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));