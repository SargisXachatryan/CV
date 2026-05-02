import{i as e,n as t,r as n,t as r}from"./jsx-runtime-Cl16e4o9.js";var i=e(n(),1),a=t(),o=[`React`,`Next.js`,`JavaScript`,`TypeScript`,`HTML/CSS`,`Python`,`C#`,`SQL`,`MongoDB`,`PostgreSQL`,`Firebase`,`Unity`,`Blender`,`Node.js`,`REST API`],s=[`Web App`,`Mobile App`,`Game`,`3D / Animation`,`Backend / API`,`Full Stack`,`Tool / Script`,`UI Design`,`Other`],c={title:``,subtitle:`Web App`,description:``,tags:[],year:new Date().getFullYear(),image:``,link:``,video:``,gallery:[]},l=r(),u=new Date().getFullYear(),d=Array.from({length:10},(e,t)=>u-t),f=10,p=`https://sargisXachatryan.github.io/CV/public/`,m=`https://sargisXachatryan.github.io/CV/public/`,h=[`png`,`jpg`,`jpeg`,`webp`,`gif`];function g(e){let[t,n]=(0,i.useState)(``),[r,a]=(0,i.useState)(`idle`);return(0,i.useEffect)(()=>{let t=e.trim();if(!t){n(``),a(`idle`);return}a(`loading`),n(``);let r=!1,i=!1,o=e=>{if(r||e>=h.length){!i&&!r&&a(`notfound`);return}let s=`${p}${t}.${h[e]}`,c=new Image;c.onload=()=>{r||(i=!0,n(s),a(`found`))},c.onerror=()=>o(e+1),c.src=s};return o(0),()=>{r=!0}},[e]),{resolvedUrl:t,status:r}}function _(e){let[t,n]=(0,i.useState)(`idle`),[r,a]=(0,i.useState)(``);return(0,i.useEffect)(()=>{let t=e.trim();if(!t){n(`idle`),a(``);return}n(`loading`),a(``);let r=!1,i=`${m}${t}`;return fetch(i,{method:`HEAD`}).then(e=>{r||(e.ok?(n(`found`),a(i)):n(`notfound`))}).catch(()=>{r||n(`notfound`)}),()=>{r=!0}},[e]),{status:t,resolvedUrl:r}}function v(e){return e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span class="json-key">${e}</span>`:`<span class="json-string">${e}</span>`:/true|false/.test(e)?`<span class="json-bool">${e}</span>`:/null/.test(e)?`<span class="json-null">${e}</span>`:`<span class="json-number">${e}</span>`)}function y(e,t){let n={id:t,title:e.title||``,subtitle:e.subtitle,description:e.description||``,tags:e.tags,year:e.year,image:e.image?`${p}${e.image}`:``};return e.link.trim()&&(n.link=e.link.trim()),e.video.trim()&&(n.video=`${m}${e.video.trim()}`),e.gallery.length>0&&(n.gallery=e.gallery.map(e=>`${p}${e}`)),n}function b(){let[e,t]=(0,i.useState)(c),[n,r]=(0,i.useState)(``),[a,u]=(0,i.useState)(!1),f=(e,n)=>t(t=>({...t,[e]:n})),p=t=>f(`tags`,e.tags.includes(t)?e.tags.filter(e=>e!==t):[...e.tags,t]),m=n.trim()===``?1:Number(n)+1,h=JSON.stringify(y(e,m),null,2),g=(0,i.useCallback)(()=>{navigator.clipboard.writeText(h).then(()=>{u(!0),setTimeout(()=>u(!1),2e3)})},[h]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`style`,{children:T}),(0,l.jsxs)(`div`,{className:`gen-root`,children:[(0,l.jsxs)(`header`,{className:`gen-header`,children:[(0,l.jsx)(`h1`,{className:`gen-title`,children:`Project Entry Generator`}),(0,l.jsxs)(`p`,{className:`gen-subtitle`,children:[`Fill in the fields → copy the JSON → paste into `,(0,l.jsx)(`code`,{children:`projects.json`})]})]}),(0,l.jsxs)(`div`,{className:`gen-layout`,children:[(0,l.jsxs)(`form`,{className:`gen-form`,onSubmit:e=>e.preventDefault(),children:[(0,l.jsxs)(`div`,{className:`gen-row`,children:[(0,l.jsx)(x,{label:`Last ID in projects.json`,hint:`Next entry will get this + 1`,children:(0,l.jsx)(`input`,{className:`gen-input`,type:`number`,min:0,step:1,placeholder:`e.g. 6`,value:n,onChange:e=>r(e.target.value)})}),(0,l.jsx)(x,{label:`Year`,hint:`The year of the project`,children:(0,l.jsx)(`select`,{className:`gen-select`,value:e.year,onChange:e=>f(`year`,Number(e.target.value)),children:d.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))})})]}),(0,l.jsx)(x,{label:`Title`,hint:`Short project name`,children:(0,l.jsx)(`input`,{className:`gen-input`,type:`text`,placeholder:`e.g. Aether UI`,value:e.title,onChange:e=>f(`title`,e.target.value)})}),(0,l.jsx)(x,{label:`Subtitle`,hint:`Project category`,children:(0,l.jsx)(`select`,{className:`gen-select`,value:e.subtitle,onChange:e=>f(`subtitle`,e.target.value),children:s.map(e=>(0,l.jsx)(`option`,{value:e,children:e},e))})}),(0,l.jsx)(x,{label:`Description`,hint:`Full project description`,children:(0,l.jsx)(`textarea`,{className:`gen-textarea`,rows:4,placeholder:`Describe the project, its goals, and what you built…`,value:e.description,onChange:e=>f(`description`,e.target.value)})}),(0,l.jsx)(x,{label:`Tags`,hint:`Select one or more`,children:(0,l.jsx)(`div`,{className:`gen-tags`,children:o.map(t=>(0,l.jsx)(`button`,{type:`button`,className:`gen-tag-btn ${e.tags.includes(t)?`selected`:``}`,onClick:()=>p(t),children:t},t))})}),(0,l.jsx)(S,{value:e.image,onChange:e=>f(`image`,e)}),(0,l.jsx)(x,{label:`Link`,hint:`Optional — project URL or '#'`,children:(0,l.jsx)(`input`,{className:`gen-input`,type:`text`,placeholder:`https://…  or  #`,value:e.link,onChange:e=>f(`link`,e.target.value)})}),(0,l.jsx)(C,{value:e.video,onChange:e=>f(`video`,e)}),(0,l.jsx)(w,{items:e.gallery,onChange:e=>f(`gallery`,e)}),(0,l.jsx)(`button`,{type:`button`,className:`gen-reset`,onClick:()=>{t(c),r(``)},children:`Reset form`})]}),(0,l.jsxs)(`div`,{className:`gen-output-col`,children:[(0,l.jsxs)(`div`,{className:`gen-output-header`,children:[(0,l.jsx)(`span`,{className:`gen-output-label`,children:`JSON Output`}),(0,l.jsx)(`button`,{type:`button`,className:`gen-copy-btn ${a?`copied`:``}`,onClick:g,children:a?`✓ Copied!`:`Copy JSON`})]}),(0,l.jsx)(`div`,{className:`gen-output-box`,children:(0,l.jsx)(`pre`,{className:`gen-json`,dangerouslySetInnerHTML:{__html:v(h)}})})]})]})]})]})}function x({label:e,hint:t,children:n}){return(0,l.jsxs)(`div`,{className:`gen-field`,children:[(0,l.jsxs)(`label`,{className:`gen-label`,children:[e,t&&(0,l.jsx)(`span`,{className:`gen-hint`,children:t})]}),n]})}function S({value:e,onChange:t}){let[n,r]=(0,i.useState)(e),{resolvedUrl:a,status:o}=g(n);return(0,i.useEffect)(()=>{t(n)},[n]),(0,l.jsxs)(`div`,{className:`gen-field`,children:[(0,l.jsxs)(`label`,{className:`gen-label`,children:[`Cover image filename`,(0,l.jsxs)(`span`,{className:`gen-hint`,children:[`Path after `,p,` — extension auto-detected`]})]}),(0,l.jsxs)(`div`,{className:`gen-img-row`,children:[(0,l.jsx)(`input`,{className:`gen-input`,type:`text`,placeholder:`e.g. /easy-chat/cover`,value:n,onChange:e=>r(e.target.value)}),o!==`idle`&&(0,l.jsx)(`span`,{className:`gen-img-status ${{idle:``,loading:`img-status--loading`,found:`img-status--found`,notfound:`img-status--notfound`}[o]}`,children:{idle:``,loading:`Searching…`,found:`✓ Found`,notfound:`✗ Not found`}[o]})]}),(0,l.jsxs)(`div`,{className:`gen-img-preview-box ${o===`found`?`visible`:``}`,children:[o===`found`&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`img`,{src:a,className:`gen-img-preview`,alt:`preview`}),(0,l.jsxs)(`span`,{className:`gen-img-url`,children:[p,n]})]}),o===`notfound`&&n.trim()&&(0,l.jsxs)(`span`,{className:`gen-img-notfound`,children:[`No image found for "`,n.trim(),`"`,(0,l.jsx)(`br`,{}),`Tried: `,h.map(e=>`${n}.${e}`).join(`, `)]})]})]})}function C({value:e,onChange:t}){let{status:n,resolvedUrl:r}=_(e);return(0,l.jsxs)(`div`,{className:`gen-field`,children:[(0,l.jsxs)(`label`,{className:`gen-label`,children:[`Video path`,(0,l.jsxs)(`span`,{className:`gen-hint`,children:[`Optional — path after `,m,` (e.g. /easy-chat/demo.mp4) or leave blank`]})]}),(0,l.jsxs)(`div`,{className:`gen-img-row`,children:[(0,l.jsx)(`input`,{className:`gen-input`,type:`text`,placeholder:`e.g. /easy-chat/demo.mp4`,value:e,onChange:e=>t(e.target.value)}),n!==`idle`&&(0,l.jsx)(`span`,{className:`gen-img-status ${{idle:``,loading:`img-status--loading`,found:`img-status--found`,notfound:`img-status--notfound`}[n]}`,children:{idle:``,loading:`Checking…`,found:`✓ Found`,notfound:`✗ Not found`}[n]})]}),n===`found`&&(0,l.jsx)(`div`,{className:`gen-img-preview-box visible`,children:(0,l.jsx)(`span`,{className:`gen-img-url`,children:r})})]})}function w({items:e,onChange:t}){let n=(0,i.useRef)(null),r=n=>{let r=Array.from(n.target.files??[]);if(r.length===0)return;let i=r.map(e=>`/${e.name}`);t([...e,...i].slice(0,f)),n.target.value=``},a=n=>{t(e.filter((e,t)=>t!==n))},o=f-e.length;return(0,l.jsxs)(`div`,{className:`gen-field`,children:[(0,l.jsxs)(`label`,{className:`gen-label`,children:[`Gallery images`,(0,l.jsxs)(`span`,{className:`gen-hint`,children:[`Select up to `,f,` images — filenames become paths after `,p]})]}),(0,l.jsx)(`input`,{ref:n,type:`file`,accept:`image/*`,multiple:!0,style:{display:`none`},onChange:r}),(0,l.jsx)(`button`,{type:`button`,className:`gen-gallery-pick-btn`,onClick:()=>n.current?.click(),disabled:o===0,children:o===0?`Max ${f} reached`:`+ Add images (${o} remaining)`}),e.length>0&&(0,l.jsx)(`ul`,{className:`gen-gallery-list`,children:e.map((e,t)=>{let n=`${p}${e}`;return(0,l.jsxs)(`li`,{className:`gen-gallery-item`,children:[(0,l.jsxs)(`span`,{className:`gen-gallery-name`,"data-preview":n,children:[e,(0,l.jsx)(`span`,{className:`gen-gallery-tooltip`,children:(0,l.jsx)(`img`,{src:n,alt:``,className:`gen-gallery-tooltip-img`})})]}),(0,l.jsx)(`button`,{type:`button`,className:`gen-gallery-remove`,onClick:()=>a(t),"aria-label":`Remove`,children:`×`})]},t)})})]})}var T=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  * { scrollbar-width: none; -ms-overflow-style: none; }
  *::-webkit-scrollbar { display: none; }

  :root {
    --bg:          #0e0d0b;
    --surface:     #161510;
    --surface2:    #1e1c17;
    --surface3:    #252318;
    --border:      rgba(255,255,255,0.07);
    --border-focus:rgba(212,168,67,0.5);
    --text:        #c8c2b4;
    --text-dim:    #6b6659;
    --heading:     #f5f0e8;
    --accent:      #d4a843;
    --accent-dim:  rgba(212,168,67,0.12);
    --radius:      8px;
    --font-display:'Bebas Neue', sans-serif;
    --font-mono:   'DM Mono', monospace;
    --font-body:   'Lora', serif;
    --json-key:    #7dd3fc;
    --json-string: #86efac;
    --json-number: #fda4af;
    --json-bool:   #c084fc;
    --json-null:   #6b7280;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  .gen-root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 48px 40px 80px;
  }

  .gen-header { margin-bottom: 40px; }
  .gen-title {
    font-family: var(--font-display);
    font-size: 52px;
    letter-spacing: 0.03em;
    color: var(--heading);
    line-height: 1;
    margin-bottom: 8px;
  }
  .gen-subtitle {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-dim);
    letter-spacing: 0.06em;
  }
  .gen-subtitle code {
    color: var(--accent);
    background: var(--accent-dim);
    padding: 1px 6px;
    border-radius: 4px;
  }

  .gen-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }

  /* ── Form ── */
  .gen-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px;
  }

  .gen-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .gen-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .gen-label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--heading);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .gen-hint {
    font-size: 10px;
    color: var(--text-dim);
    text-transform: none;
    letter-spacing: 0.04em;
  }

  .gen-input,
  .gen-select,
  .gen-textarea {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--heading);
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 10px 14px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    width: 100%;
  }
  .gen-input::placeholder,
  .gen-textarea::placeholder { color: var(--text-dim); }
  .gen-input:focus,
  .gen-select:focus,
  .gen-textarea:focus {
    border-color: var(--border-focus);
    background: var(--surface3);
  }
  .gen-select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b6659' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
  }
  .gen-select option { background: #1e1c17; }
  .gen-textarea { resize: vertical; min-height: 88px; }

  /* Tag buttons */
  .gen-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .gen-tag-btn {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    padding: 5px 14px;
    border-radius: 99px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.18s;
  }
  .gen-tag-btn:hover { color: var(--heading); border-color: rgba(255,255,255,0.2); }
  .gen-tag-btn.selected { background: var(--accent); border-color: var(--accent); color: var(--bg); }

  /* Image / status shared */
  .gen-img-row { display: flex; align-items: center; gap: 12px; }
  .gen-img-row .gen-input { flex: 1; }

  .gen-img-status {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.06em;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .img-status--loading { color: var(--text-dim); }
  .img-status--found   { color: #86efac; }
  .img-status--notfound{ color: #fca5a5; }

  .gen-img-preview-box {
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--surface2);
    max-height: 0;
    transition: max-height 0.3s ease;
  }
  .gen-img-preview-box.visible { max-height: 220px; }

  .gen-img-preview {
    width: 100%; height: 160px;
    object-fit: cover; display: block;
  }
  .gen-img-url {
    display: block;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-dim);
    padding: 6px 10px;
    word-break: break-all;
  }
  .gen-img-notfound {
    display: block;
    font-family: var(--font-mono);
    font-size: 11px;
    color: #fca5a5;
    padding: 14px;
    line-height: 1.8;
  }

  /* ── Gallery field ── */
  .gen-gallery-pick-btn {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 9px 20px;
    border-radius: var(--radius);
    border: 1px dashed var(--border);
    background: rgba(255,255,255,0.02);
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
  }
  .gen-gallery-pick-btn:hover:not(:disabled) {
    border-color: var(--accent-border, rgba(212,168,67,0.35));
    color: var(--accent);
    background: var(--accent-dim);
  }
  .gen-gallery-pick-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .gen-gallery-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 4px;
  }

  .gen-gallery-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 12px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    transition: border-color 0.2s;
  }
  .gen-gallery-item:hover { border-color: rgba(255,255,255,0.14); }

  /* Filename span with hover tooltip preview */
  .gen-gallery-name {
    position: relative;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text);
    letter-spacing: 0.04em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    cursor: default;
  }
  .gen-gallery-name:hover { color: var(--heading); }

  /* Tooltip image that appears above on hover */
  .gen-gallery-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    z-index: 999;
    pointer-events: none;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.18s, transform 0.18s;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 8px 24px rgba(0,0,0,0.6);
  }
  .gen-gallery-name:hover .gen-gallery-tooltip {
    opacity: 1;
    transform: translateY(0);
  }
  .gen-gallery-tooltip-img {
    display: block;
    width: 180px;
    height: 100px;
    object-fit: cover;
    background: var(--surface2);
  }

  /* Remove button */
  .gen-gallery-remove {
    flex-shrink: 0;
    width: 20px; height: 20px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; line-height: 1;
    background: none;
    border: none;
    border-radius: 50%;
    color: var(--text-dim);
    cursor: pointer;
    transition: color 0.15s, background 0.15s;
  }
  .gen-gallery-remove:hover {
    color: #fca5a5;
    background: rgba(252,165,165,0.1);
  }

  /* Reset button */
  .gen-reset {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    padding: 7px 18px;
    border-radius: 99px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.18s;
  }
  .gen-reset:hover { color: var(--heading); border-color: rgba(255,255,255,0.2); }

  /* ── Output column ── */
  .gen-output-col {
    position: sticky;
    top: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid var(--border);
    overflow: hidden;
  }

  .gen-output-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    background: var(--surface2);
    border-bottom: 1px solid var(--border);
  }
  .gen-output-label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .gen-copy-btn {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 7px 20px;
    border-radius: 99px;
    border: 1px solid rgba(212,168,67,0.35);
    background: rgba(212,168,67,0.1);
    color: var(--accent);
    cursor: pointer;
    transition: all 0.2s;
  }
  .gen-copy-btn:hover { background: var(--accent); color: var(--bg); }
  .gen-copy-btn.copied { background: #166534; border-color: #22c55e; color: #86efac; }

  .gen-output-box {
    background: var(--surface);
    padding: 24px;
    min-height: 340px;
    overflow-x: auto;
    overflow-y: auto;
    max-height: calc(100vh - 200px);
  }

  .gen-json {
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1.75;
    white-space: pre;
    color: var(--text);
  }

  .gen-json .json-key    { color: var(--json-key); }
  .gen-json .json-string { color: var(--json-string); }
  .gen-json .json-number { color: var(--json-number); }
  .gen-json .json-bool   { color: var(--json-bool); }
  .gen-json .json-null   { color: var(--json-null); }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .gen-root { padding: 32px 20px 60px; }
    .gen-layout { grid-template-columns: 1fr; }
    .gen-output-col { position: static; }
    .gen-output-box { max-height: none; }
  }
  @media (max-width: 480px) {
    .gen-row { grid-template-columns: 1fr; }
    .gen-title { font-size: 38px; }
  }
`;(0,a.createRoot)(document.getElementById(`root`)).render((0,l.jsx)(i.StrictMode,{children:(0,l.jsx)(b,{})}));