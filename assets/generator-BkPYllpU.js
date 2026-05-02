import{a as e,i as t,n,r,t as i}from"./projects-Cc76rxz6.js";var a=e(t(),1),o=r(),s=[`React`,`Next.js`,`JavaScript`,`TypeScript`,`HTML/CSS`,`Python`,`C#`,`SQL`,`MongoDB`,`PostgreSQL`,`Firebase`,`Unity`,`Blender`,`Davinci Resolve`,`Node.js`,`REST API`],c=[`Web App`,`Mobile App`,`Game`,`3D / Animation`,`Backend / API`,`Full Stack`,`Tool / Script`,`UI Design`,`Other`],l={title:``,subtitle:`Web App`,description:``,tags:[],year:new Date().getFullYear(),image:``,link:``,video:``,gallery:[]},u=n(),d=new Date().getFullYear(),f=Array.from({length:10},(e,t)=>d-t),p=9,m=`https://sargisXachatryan.github.io/CV/resources`,h=`https://sargisXachatryan.github.io/CV/resources`,g=[`png`,`jpg`,`jpeg`,`webp`,`gif`];function _(e){let[t,n]=(0,a.useState)(``),[r,i]=(0,a.useState)(`idle`);return(0,a.useEffect)(()=>{let t=e.trim();if(!t){n(``),i(`idle`);return}i(`loading`),n(``);let r=!1,a=!1,o=g.some(e=>t.toLowerCase().endsWith(`.${e}`)),s=e=>{if(r||e>=g.length){!a&&!r&&i(`notfound`);return}let o=`${m}${t}.${g[e]}`,c=new Image;c.onload=()=>{r||(a=!0,n(o),i(`found`))},c.onerror=()=>s(e+1),c.src=o};if(o){let e=`${m}${t}`,o=new Image;o.onload=()=>{r||(a=!0,n(e),i(`found`))},o.onerror=()=>{r||i(`notfound`)},o.src=e}else s(0);return()=>{r=!0}},[e]),{resolvedUrl:t,status:r}}function v(e){let[t,n]=(0,a.useState)(`idle`),[r,i]=(0,a.useState)(``);return(0,a.useEffect)(()=>{let t=e.trim();if(!t){n(`idle`),i(``);return}n(`loading`),i(``);let r=!1,a=`${h}${t}`;return fetch(a,{method:`HEAD`}).then(e=>{r||(e.ok?(n(`found`),i(a)):n(`notfound`))}).catch(()=>{r||n(`notfound`)}),()=>{r=!0}},[e]),{status:t,resolvedUrl:r}}function y(e){return e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span class="json-key">${e}</span>`:`<span class="json-string">${e}</span>`:/true|false/.test(e)?`<span class="json-bool">${e}</span>`:/null/.test(e)?`<span class="json-null">${e}</span>`:`<span class="json-number">${e}</span>`)}function b(e,t){let n={id:t,title:e.title||``,subtitle:e.subtitle,description:e.description||``,tags:e.tags,year:e.year,image:e.image?`${m}${e.image}`:``};return e.link.trim()&&(n.link=e.link.trim()),e.video.trim()&&(n.video=`${h}${e.video.trim()}`),e.gallery.length>0&&(n.gallery=e.gallery.map(e=>`${m}${e}`)),n}function x(){let[e,t]=(0,a.useState)(l),[n,r]=(0,a.useState)(!1),o=i.map(e=>e.id),d=o.length>0?Math.max(...o):0,p=(e,n)=>t(t=>({...t,[e]:n})),m=t=>p(`tags`,e.tags.includes(t)?e.tags.filter(e=>e!==t):[...e.tags,t]),h=d+1,g=JSON.stringify(b(e,h),null,2),_=(0,a.useCallback)(()=>{navigator.clipboard.writeText(g).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})},[g]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`style`,{children:E}),(0,u.jsxs)(`div`,{className:`gen-root`,children:[(0,u.jsxs)(`header`,{className:`gen-header`,children:[(0,u.jsx)(`h1`,{className:`gen-title`,children:`Project Entry Generator`}),(0,u.jsxs)(`p`,{className:`gen-subtitle`,children:[`Fill in the fields → copy the JSON → paste into `,(0,u.jsx)(`code`,{children:`projects.json`})]})]}),(0,u.jsxs)(`div`,{className:`gen-layout`,children:[(0,u.jsxs)(`form`,{className:`gen-form`,onSubmit:e=>e.preventDefault(),children:[(0,u.jsxs)(`div`,{className:`gen-row`,children:[(0,u.jsx)(S,{label:`Next ID`,hint:`Auto-calculated from projects.json`,children:(0,u.jsxs)(`div`,{className:`gen-id-result`,children:[(0,u.jsx)(`span`,{className:`gen-id-label`,children:`Last`}),(0,u.jsx)(`span`,{className:`gen-id-value`,children:d}),(0,u.jsx)(`span`,{className:`gen-id-arrow`,children:`→`}),(0,u.jsx)(`span`,{className:`gen-id-label`,children:`Next`}),(0,u.jsx)(`span`,{className:`gen-id-next`,children:h})]})}),(0,u.jsx)(S,{label:`Year`,hint:`The year of the project`,children:(0,u.jsx)(`select`,{className:`gen-select`,value:e.year,onChange:e=>p(`year`,Number(e.target.value)),children:f.map(e=>(0,u.jsx)(`option`,{value:e,children:e},e))})})]}),(0,u.jsx)(S,{label:`Title`,hint:`Short project name`,children:(0,u.jsx)(`input`,{className:`gen-input`,type:`text`,placeholder:`e.g. Aether UI`,value:e.title,onChange:e=>p(`title`,e.target.value)})}),(0,u.jsx)(S,{label:`Subtitle`,hint:`Project category`,children:(0,u.jsx)(`select`,{className:`gen-select`,value:e.subtitle,onChange:e=>p(`subtitle`,e.target.value),children:c.map(e=>(0,u.jsx)(`option`,{value:e,children:e},e))})}),(0,u.jsx)(S,{label:`Description`,hint:`Full project description`,children:(0,u.jsx)(`textarea`,{className:`gen-textarea`,rows:4,placeholder:`Describe the project, its goals, and what you built…`,value:e.description,onChange:e=>p(`description`,e.target.value)})}),(0,u.jsx)(S,{label:`Tags`,hint:`Select one or more`,children:(0,u.jsx)(`div`,{className:`gen-tags`,children:s.map(t=>(0,u.jsx)(`button`,{type:`button`,className:`gen-tag-btn ${e.tags.includes(t)?`selected`:``}`,onClick:()=>m(t),children:t},t))})}),(0,u.jsx)(C,{value:e.image,onChange:e=>p(`image`,e)}),(0,u.jsx)(S,{label:`Link`,hint:`Optional — project URL or '#'`,children:(0,u.jsx)(`input`,{className:`gen-input`,type:`text`,placeholder:`https://…  or  #`,value:e.link,onChange:e=>p(`link`,e.target.value)})}),(0,u.jsx)(w,{value:e.video,onChange:e=>p(`video`,e)}),(0,u.jsx)(T,{items:e.gallery,onChange:e=>p(`gallery`,e)}),(0,u.jsx)(`button`,{type:`button`,className:`gen-reset`,onClick:()=>{t(l)},children:`Reset form`})]}),(0,u.jsxs)(`div`,{className:`gen-output-col`,children:[(0,u.jsxs)(`div`,{className:`gen-output-header`,children:[(0,u.jsx)(`span`,{className:`gen-output-label`,children:`JSON Output`}),(0,u.jsx)(`button`,{type:`button`,className:`gen-copy-btn ${n?`copied`:``}`,onClick:_,children:n?`✓ Copied!`:`Copy JSON`})]}),(0,u.jsx)(`div`,{className:`gen-output-box`,children:(0,u.jsx)(`pre`,{className:`gen-json`,dangerouslySetInnerHTML:{__html:y(g)}})})]})]})]})]})}function S({label:e,hint:t,children:n}){return(0,u.jsxs)(`div`,{className:`gen-field`,children:[(0,u.jsxs)(`label`,{className:`gen-label`,children:[e,t&&(0,u.jsx)(`span`,{className:`gen-hint`,children:t})]}),n]})}function C({value:e,onChange:t}){let n=(0,a.useRef)(null),[r,i]=(0,a.useState)(``),{resolvedUrl:o,status:s}=_(e);return(0,u.jsxs)(`div`,{className:`gen-field`,children:[(0,u.jsxs)(`label`,{className:`gen-label`,children:[`Cover image`,(0,u.jsx)(`span`,{className:`gen-hint`,children:`Select the cover image file — full filename including extension is used`})]}),(0,u.jsx)(`input`,{ref:n,type:`file`,accept:`image/*`,style:{display:`none`},onChange:e=>{let n=e.target.files?.[0];if(!n)return;let r=`/${n.name}`;i(n.name),t(r),e.target.value=``}}),(0,u.jsxs)(`div`,{className:`gen-file-row`,children:[(0,u.jsxs)(`button`,{type:`button`,className:`gen-file-pick-btn`,onClick:()=>n.current?.click(),children:[(0,u.jsx)(`svg`,{viewBox:`0 0 20 20`,fill:`currentColor`,width:`14`,height:`14`,children:(0,u.jsx)(`path`,{d:`M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v10H4V5zm2 5l2-2 2 2 2-3 3 4H4l2-1z`})}),r?`Change image`:`Select image`]}),r&&(0,u.jsx)(`span`,{className:`gen-file-name`,children:r}),s!==`idle`&&(0,u.jsx)(`span`,{className:`gen-img-status ${{idle:``,loading:`img-status--loading`,found:`img-status--found`,notfound:`img-status--notfound`}[s]}`,children:{idle:``,loading:`Searching…`,found:`✓ Found`,notfound:`✗ Not found`}[s]})]}),(0,u.jsxs)(`div`,{className:`gen-img-preview-box ${s===`found`?`visible`:``}`,children:[s===`found`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`img`,{src:o,className:`gen-img-preview`,alt:`preview`}),(0,u.jsxs)(`span`,{className:`gen-img-url`,children:[m,e]})]}),s===`notfound`&&e.trim()&&(0,u.jsxs)(`span`,{className:`gen-img-notfound`,children:[`No image found at "`,m,e.trim(),`"`]})]})]})}function w({value:e,onChange:t}){let n=(0,a.useRef)(null),[r,i]=(0,a.useState)(``),{status:o,resolvedUrl:s}=v(e);return(0,u.jsxs)(`div`,{className:`gen-field`,children:[(0,u.jsxs)(`label`,{className:`gen-label`,children:[`Video`,(0,u.jsxs)(`span`,{className:`gen-hint`,children:[`Optional — select an .mp4 file. Path resolved from `,h]})]}),(0,u.jsx)(`input`,{ref:n,type:`file`,accept:`.mp4,video/mp4`,style:{display:`none`},onChange:e=>{let n=e.target.files?.[0];if(!n)return;let r=`/${n.name}`;i(n.name),t(r),e.target.value=``}}),(0,u.jsxs)(`div`,{className:`gen-file-row`,children:[(0,u.jsxs)(`button`,{type:`button`,className:`gen-file-pick-btn`,onClick:()=>n.current?.click(),children:[(0,u.jsx)(`svg`,{viewBox:`0 0 20 20`,fill:`currentColor`,width:`14`,height:`14`,children:(0,u.jsx)(`path`,{d:`M2 6a2 2 0 012-2h6l2 2h4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm11 3l-4-2v6l4-2V9z`})}),r?`Change video`:`Select .mp4`]}),r&&(0,u.jsx)(`span`,{className:`gen-file-name`,children:r}),o!==`idle`&&(0,u.jsx)(`span`,{className:`gen-img-status ${{idle:``,loading:`img-status--loading`,found:`img-status--found`,notfound:`img-status--notfound`}[o]}`,children:{idle:``,loading:`Checking…`,found:`✓ Found`,notfound:`✗ Not found`}[o]})]}),o===`found`&&(0,u.jsx)(`div`,{className:`gen-img-preview-box visible`,children:(0,u.jsx)(`span`,{className:`gen-img-url`,children:s})}),r&&e&&(0,u.jsx)(`button`,{type:`button`,className:`gen-file-clear`,onClick:()=>{i(``),t(``)},children:`× Remove video`})]})}function T({items:e,onChange:t}){let n=(0,a.useRef)(null),r=n=>{let r=Array.from(n.target.files??[]);if(r.length===0)return;let i=r.map(e=>`/${e.name}`);t([...e,...i].slice(0,p)),n.target.value=``},i=n=>{t(e.filter((e,t)=>t!==n))},o=p-e.length;return(0,u.jsxs)(`div`,{className:`gen-field`,children:[(0,u.jsxs)(`label`,{className:`gen-label`,children:[`Gallery images`,(0,u.jsxs)(`span`,{className:`gen-hint`,children:[`Select up to `,p,` images — filenames become paths after `,m]})]}),(0,u.jsx)(`input`,{ref:n,type:`file`,accept:`image/*`,multiple:!0,style:{display:`none`},onChange:r}),(0,u.jsx)(`button`,{type:`button`,className:`gen-gallery-pick-btn`,onClick:()=>n.current?.click(),disabled:o===0,children:o===0?`Max ${p} reached`:`+ Add images (${o} remaining)`}),e.length>0&&(0,u.jsx)(`ul`,{className:`gen-gallery-list`,children:e.map((e,t)=>{let n=`${m}${e}`;return(0,u.jsxs)(`li`,{className:`gen-gallery-item`,children:[(0,u.jsxs)(`span`,{className:`gen-gallery-name`,"data-preview":n,children:[e,(0,u.jsx)(`span`,{className:`gen-gallery-tooltip`,children:(0,u.jsx)(`img`,{src:n,alt:``,className:`gen-gallery-tooltip-img`})})]}),(0,u.jsx)(`button`,{type:`button`,className:`gen-gallery-remove`,onClick:()=>i(t),"aria-label":`Remove`,children:`×`})]},t)})})]})}var E=`
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

  /* ── Generic file picker button ── */
  .gen-file-pick-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    padding: 9px 18px;
    border-radius: var(--radius);
    border: 1px dashed var(--border);
    background: rgba(255,255,255,0.02);
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.2s;
    align-self: flex-start;
  }
  .gen-file-pick-btn:hover {
    border-color: var(--accent-border, rgba(212,168,67,0.35));
    color: var(--accent);
    background: var(--accent-dim);
  }

  /* Row for picker button + filename + status */
  .gen-file-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  /* Filename shown after file is picked */
  .gen-file-name {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--heading);
    letter-spacing: 0.04em;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 5px 12px;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Error message for JSON parsing */
  .gen-file-error {
    font-family: var(--font-mono);
    font-size: 11px;
    color: #fca5a5;
    letter-spacing: 0.04em;
  }

  /* Inline clear link for video */
  .gen-file-clear {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-dim);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    letter-spacing: 0.04em;
    transition: color 0.15s;
  }
  .gen-file-clear:hover { color: #fca5a5; }

  /* ID result pill row */
  .gen-id-result {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 7px 14px;
    align-self: flex-start;
  }
  .gen-id-label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-dim);
  }
  .gen-id-value {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text);
  }
  .gen-id-arrow {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-dim);
    margin: 0 2px;
  }
  .gen-id-next {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 500;
    color: var(--accent);
  }

  /* Image / status shared */
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
`;(0,o.createRoot)(document.getElementById(`root`)).render((0,u.jsx)(a.StrictMode,{children:(0,u.jsx)(x,{})}));