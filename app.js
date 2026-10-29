const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const libraries = {
  html: [
    ["Document structure","The basic skeleton of an HTML page.","<!doctype html>\n<html lang=\"en\">\n<head><title>Page</title></head>\n<body>Hello!</body>\n</html>","Beginner"],
    ["Headings & paragraphs","Use headings to create hierarchy and paragraphs for text.","<h1>Main heading</h1>\n<h2>Section heading</h2>\n<p>A paragraph of text.</p>","Beginner"],
    ["Links","Use anchors to navigate to another page or location.","<a href=\"https://example.com\">Visit example</a>","Beginner"],
    ["Images","Add meaningful alternative text to images.","<img src=\"photo.jpg\" alt=\"A mountain view\">","Beginner"],
    ["Lists","Use ordered lists for sequences and unordered lists for groups.","<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>","Beginner"],
    ["Forms & inputs","Collect user information with labels and form controls.","<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">\n<button type=\"submit\">Send</button>","Intermediate"],
    ["Tables","Use table headers and rows for tabular data.","<table>\n  <tr><th>Name</th><th>Level</th></tr>\n  <tr><td>Sara</td><td>Beginner</td></tr>\n</table>","Intermediate"],
    ["Semantic HTML","Use meaningful elements to describe page regions.","<header>Site header</header>\n<nav>Navigation</nav>\n<main>Main content</main>\n<footer>Footer</footer>","Intermediate"],
    ["Audio & video","Embed media with native browser controls.","<audio controls src=\"audio.mp3\"></audio>\n<video controls width=\"320\" src=\"clip.mp4\"></video>","Intermediate"],
    ["Buttons & details","Create actions and disclosure widgets with native elements.","<button type=\"button\">Click me</button>\n<details><summary>More</summary><p>Extra info</p></details>","Beginner"],
    ["Metadata","Set encoding, viewport and page description in the head.","<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","Intermediate"],
    ["Accessibility basics","Connect labels, provide alt text, and keep controls keyboard-friendly.","<label for=\"name\">Name</label>\n<input id=\"name\" name=\"name\">","Intermediate"]
  ],
  css: [
    ["Selectors","Select elements, classes, IDs and related elements.",".card { padding: 1rem; }\n#hero { color: royalblue; }\nbutton:hover { opacity: .8; }","Beginner"],
    ["Colors & backgrounds","Use color values, gradients and background images.","body {\n  color: #eef3ff;\n  background: linear-gradient(120deg, #101827, #1d3150);\n}","Beginner"],
    ["Box model","Control content size, padding, border and margin.","* { box-sizing: border-box; }\n.card { padding: 16px; border: 1px solid #ddd; margin: 12px; }","Beginner"],
    ["Typography","Tune font family, size, weight, spacing and line height.","h1 { font-size: clamp(2rem, 5vw, 4rem); letter-spacing: -2px; }\np { line-height: 1.7; }","Beginner"],
    ["Flexbox","Align items along a row or column.",".row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }","Intermediate"],
    ["CSS Grid","Create responsive two-dimensional layouts.",".grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }","Intermediate"],
    ["Positioning","Place elements with relative, absolute, fixed or sticky positioning.",".parent { position: relative; }\n.badge { position: absolute; top: 8px; right: 8px; }","Intermediate"],
    ["Responsive design","Use media queries to adapt layouts to screen width.",".cards { display: grid; grid-template-columns: repeat(3, 1fr); }\n@media (max-width: 700px) { .cards { grid-template-columns: 1fr; } }","Intermediate"],
    ["Transitions","Animate property changes smoothly on interaction.",".button { transition: transform .2s, background .2s; }\n.button:hover { transform: translateY(-2px); }","Intermediate"],
    ["Animations","Define reusable keyframe animations.","@keyframes pulse { 50% { opacity: .5; transform: scale(1.04); } }\n.dot { animation: pulse 1.5s infinite; }","Advanced"],
    ["Pseudo-elements","Add decorative content without extra HTML elements.",".title::after { content: \"\"; display: block; width: 3rem; height: 3px; background: dodgerblue; }","Intermediate"],
    ["CSS variables","Reuse design tokens throughout a stylesheet.",":root { --accent: #56a6ff; }\n.button { background: var(--accent); }","Intermediate"]
  ],
  js: [
    ["Variables & constants","Use const by default and let when reassignment is needed.","const siteName = \"CodeVerse\";\nlet score = 0;\nscore += 1;","Beginner"],
    ["Data types","Work with strings, numbers, booleans, null and undefined.","const username = \"Sufiyan\";\nconst level = 9;\nconst isLearning = true;","Beginner"],
    ["Operators","Combine values with arithmetic, comparison and logical operators.","const total = 250 * 3;\nconst hasDiscount = total >= 1000;","Beginner"],
    ["Conditionals","Run different code depending on a condition.","const score = 82;\nif (score >= 50) {\n  console.log(\"Passed\");\n} else {\n  console.log(\"Try again\");\n}","Beginner"],
    ["Loops","Repeat an action with for, while or for...of.","for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}","Beginner"],
    ["Functions","Package reusable behavior in a named function.","function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet(\"Coder\"));","Beginner"],
    ["Arrays","Store ordered collections and use array methods.","const tools = [\"HTML\", \"CSS\", \"JS\"];\ntools.push(\"Git\");\nconsole.log(tools);","Beginner"],
    ["Objects","Group related properties and methods.","const user = { name: \"Ari\", level: 1 };\nconsole.log(user.name);","Intermediate"],
    ["DOM selection","Find page elements and update their content.","const heading = document.querySelector(\"h1\");\nheading.textContent = \"Updated heading\";","Intermediate"],
    ["Events","React to clicks, typing and other user actions.","document.querySelector(\"button\").addEventListener(\"click\", () => {\n  alert(\"Button clicked!\");\n});","Intermediate"],
    ["Array methods","Transform and filter data with map, filter and find.","const nums = [1, 2, 3, 4];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);","Intermediate"],
    ["JSON","Convert between JavaScript values and JSON strings.","const user = { name: \"Ari\" };\nconst text = JSON.stringify(user);\nconst copy = JSON.parse(text);","Intermediate"],
    ["Promises","Represent a value that may be available later.","Promise.resolve(\"Done\").then(value => {\n  console.log(value);\n});","Advanced"],
    ["Async & await","Write asynchronous code in a readable sequence.","async function loadData() {\n  const response = await fetch(\"/api/data\");\n  return response.json();\n}","Advanced"],
    ["Error handling","Handle expected failures with try/catch.","try {\n  JSON.parse(\"not json\");\n} catch (error) {\n  console.error(\"Could not parse data\");\n}","Intermediate"],
    ["Modules","Share code between JavaScript files with import and export.","// math.js\nexport const add = (a, b) => a + b;\n// app.js\nimport { add } from \"./math.js\";","Advanced"]
  ]
};

const starter = {
  html: `<div class="demo-card">
  <span class="eyebrow">HELLO, WEB</span>
  <h1>Build something <span>great.</span></h1>
  <p>Edit this page with HTML, CSS and JavaScript.</p>
  <button id="demoButton">Click me</button>
  <p id="message">Your next idea starts here.</p>
</div>`,
  css: `* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #0b1220;
  color: #f3f7ff;
}
.demo-card {
  width: min(90%, 460px);
  padding: 32px;
  border: 1px solid #2b4565;
  border-radius: 20px;
  background: linear-gradient(145deg, #14243a, #101520);
  box-shadow: 0 20px 60px #0005;
}
.eyebrow { color: #8cbfff; letter-spacing: 2px; font-size: 11px; }
h1 { line-height: 1.1; }
h1 span { color: #65adff; }
p { color: #a9b8cc; line-height: 1.7; }
button {
  border: 0; border-radius: 9px; padding: 12px 16px;
  background: #65adff; color: #081321; font-weight: bold;
  cursor: pointer;
}
button:hover { transform: translateY(-2px); }`,
  js: `const button = document.querySelector("#demoButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Nice! You just ran JavaScript ✨";
});`
};
let activeLanguage = "html";
let toastTimer;

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function switchView(view) {
  $$(".view").forEach(section => section.classList.toggle("active-view", section.id === `view-${view}`));
  $$(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  const labels = {dashboard:"Overview",html:"HTML Library",css:"CSS Library",js:"JavaScript Library",playground:"Live Playground"};
  $("#crumbTitle").textContent = labels[view] || "Overview";
  $("#sidebar").classList.remove("open");
  if (view === "playground" && !$("#codeEditor").value) loadEditor("html");
  window.scrollTo({top:0, behavior:"smooth"});
}
function goTo(view) { switchView(view); }

function renderLibrary(language, filter = "") {
  const host = $(`#${language}Topics`);
  const count = $(`#${language}Count`);
  const normalized = filter.toLowerCase().trim();
  const items = libraries[language].filter(item => item.join(" ").toLowerCase().includes(normalized));
  count.textContent = `${items.length} topics`;
  if (!items.length) {
    host.innerHTML = `<div class="empty-state">No topics found. Try a different search.</div>`;
    return;
  }
  host.innerHTML = items.map(item => {
    const index = libraries[language].indexOf(item);
    return `<article class="topic-card">
      <span class="topic-number">${String(index + 1).padStart(2,"0")} / ${language.toUpperCase()}</span>
      <h3>${escapeHTML(item[0])}</h3>
      <p>${escapeHTML(item[1])}</p>
      <pre>${escapeHTML(item[2])}</pre>
      <div class="topic-actions"><span>${item[3]}</span><button data-topic="${language}:${index}">Try in editor ↗</button></div>
    </article>`;
  }).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function loadEditor(language, example = null) {
  activeLanguage = language;
  $$(".editor-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.editor === language));
  $("#editorTitle").textContent = ({html:"index.html",css:"style.css",js:"app.js"})[language];
  $("#editorLanguage").textContent = language.toUpperCase();
  $("#codeEditor").value = example ?? starter[language];
}
function runPreview() {
  const html = activeLanguage === "html" ? $("#codeEditor").value : starter.html;
  const css = activeLanguage === "css" ? $("#codeEditor").value : starter.css;
  const js = activeLanguage === "js" ? $("#codeEditor").value : starter.js;
  const safeScript = js.replace(/<\/script/gi, "<\\/script");
  const doc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css.replace(/<\/style/gi,"<\\/style")}</style></head><body>${html}<script>${safeScript}<\/script></body></html>`;
  $("#previewFrame").srcdoc = doc;
  $("#previewStatus").textContent = "Updated just now";
  showToast("Preview updated successfully");
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-view]");
  if (nav) switchView(nav.dataset.view);
  const jump = event.target.closest("[data-jump]");
  if (jump) switchView(jump.dataset.jump);
  const topic = event.target.closest("[data-topic]");
  if (topic) {
    const [language, index] = topic.dataset.topic.split(":");
    switchView("playground");
    loadEditor(language, libraries[language][Number(index)][2]);
    showToast(`${libraries[language][Number(index)][0]} loaded in editor`);
  }
  const quick = event.target.closest("[data-example]");
  if (quick) {
    const examples = {
      button: {language:"html",code:`<div class="demo-card"><h1>Interactive button</h1><p id="result">Click the button to change this message.</p><button id="action">Click me</button></div>`},
      gradient: {language:"css",code:`body { margin:0; min-height:100vh; display:grid; place-items:center; font-family:Arial,sans-serif; background:linear-gradient(135deg,#0e1730,#542c77,#176b8a); color:white; }\n.demo-card { padding:40px; border:1px solid #ffffff44; border-radius:20px; background:#ffffff12; backdrop-filter:blur(12px); }`},
      loop: {language:"js",code:`const output = document.querySelector("#message");\nconst numbers = [];\nfor (let i = 1; i <= 10; i++) {\n  numbers.push(i);\n}\noutput.textContent = numbers.join(" • ");\nconsole.log(numbers);`}
    };
    const selected = examples[quick.dataset.example];
    switchView("playground");
    loadEditor(selected.language, selected.code);
    showToast("Example loaded — click Run code");
  }
});

$$(".editor-tab").forEach(tab => tab.addEventListener("click", () => loadEditor(tab.dataset.editor)));
$("#runCode").addEventListener("click", runPreview);
$("#refreshPreview").addEventListener("click", runPreview);
$("#resetCode").addEventListener("click", () => { loadEditor(activeLanguage); showToast("Starter code restored"); });
$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  showToast(document.body.classList.contains("light") ? "Light theme enabled" : "Dark theme enabled");
});
$("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#goPlayground").addEventListener("click", () => switchView("playground"));
$("#topPlay").addEventListener("click", event => { event.preventDefault(); switchView("playground"); });
$("#htmlSearch").addEventListener("input", event => renderLibrary("html", event.target.value));
$("#cssSearch").addEventListener("input", event => renderLibrary("css", event.target.value));
$("#jsSearch").addEventListener("input", event => renderLibrary("js", event.target.value));

renderLibrary("html");
renderLibrary("css");
renderLibrary("js");
loadEditor("html");
runPreview();
