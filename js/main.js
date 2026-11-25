/* ============================================================
    렌더링
   ============================================================ */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("#timeline").innerHTML = TIMELINE.map((t) => `
  <div class="tl-item reveal">
    <div class="tl-date">${esc(t.date)}</div>
    <div class="tl-title">${esc(t.title)}${t.now ? '<span class="tag-now">재학 중</span>' : ""}
      ${t.sub ? `<small>${esc(t.sub)}</small>` : ""}</div>
  </div>`).join("");

$("#skills-grid").innerHTML = Object.entries(SKILLS).map(([k, v]) => `
  <div class="skill-card reveal"><h3>${esc(k)}</h3>
    <div class="chips">${v.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
  </div>`).join("");

/* 프로젝트 + 필터 */
// 문자열이면 한 줄, { text, sub } 이면 하위 목록까지
const didItem = (x) => typeof x === "string"
  ? `<li>${esc(x)}</li>`
  : `<li>${esc(x.text)}<ul class="sub">${x.sub.map((y) => `<li>${esc(y)}</li>`).join("")}</ul></li>`;
// 문자열이면 한 줄, { title, hard, effort, result } 이면 어려움 → 노력 → 성과
const effortItem = (x) => typeof x === "string"
  ? `<li>${esc(x)}</li>`
  : `<li><b>${esc(x.title)}</b><ul class="sub">
        <li><em>어려움</em> ${esc(x.hard)}</li>
        <li><em>노력</em> ${esc(x.effort)}</li>
        <li><em>성과</em> ${esc(x.result)}</li></ul></li>`;

const FILTERS = ["전체", "수상작", "2026", "2025", "2024"];
let current = "전체";
function renderProjects() {
  const list = PROJECTS.filter((p) =>
    current === "전체" ? true : current === "수상작" ? p.award : String(p.year) === current);
  $("#project-grid").innerHTML = list.map((p) => `
    <article class="card">
      <div class="card-top">
        <span class="card-emoji">${p.emoji}</span>
        <div class="card-meta">
          ${p.award ? '<span class="badge award">🏆 수상</span>' : ""}
          <span class="badge">${esc(p.period || p.year)}</span>
        </div>
      </div>
      <h3>${esc(p.name)}</h3>
      <p class="desc">${esc(p.desc)}</p>
      ${p.intro ? `<p class="intro">${esc(p.intro)}</p>` : ""}
      ${p.meta ? `<p class="role">${esc(p.meta)}</p>` : ""}
      ${p.stack.length ? `<p class="tech"><b>Tech</b> ${p.stack.map(esc).join(", ")}</p>` : ""}
      ${p.did.length ? `<div class="block"><h4>What I did</h4><ul>${p.did.map(didItem).join("")}</ul></div>` : ""}
      ${p.effort.length ? `<div class="block effort"><h4>${esc(p.effortTitle || "노력")}</h4><ul>${p.effort.map(effortItem).join("")}</ul></div>` : ""}
      ${p.link ? `<a class="link" href="${p.link}" target="_blank" rel="noopener">GitHub →</a>` : ""}
    </article>`).join("");
}
$("#filters").innerHTML = FILTERS.map((f) =>
  `<button class="filter${f === current ? " active" : ""}" data-f="${f}">${f}</button>`).join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter"); if (!b) return;
  current = b.dataset.f;
  document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("active", x === b));
  renderProjects();
});
renderProjects();

$("#award-list").innerHTML = AWARDS.map((a) => `
  <div class="award-row reveal">
    <span class="yr">${a.year}</span>
    <span class="nm">${esc(a.name)}<small>${esc(a.sub)}</small></span>
    <span class="kind">${a.kind}</span>
  </div>`).join("");

$("#year").textContent = new Date().getFullYear();

/* 테마 */
const root = document.documentElement, btn = $("#themeBtn");
function setTheme(t) {
  root.dataset.theme = t; btn.textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
btn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

/* 스크롤 등장 애니메이션 */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));