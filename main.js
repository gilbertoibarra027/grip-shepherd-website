// Mobile nav toggle
const t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
t.addEventListener('click',()=>{const o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',!o);n.classList.toggle('open',!o);t.setAttribute('aria-label',o?'Open menu':'Close menu');});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');t.setAttribute('aria-expanded','false');}));
// Validation + Web3Forms fetch submit (no-JS fallback: native POST to action)
const f=document.getElementById('quote-form');
const msgs={name:'Please enter your name.',phone:'Enter a valid phone number.',email:'Enter a valid email address.',zip:'Enter a 5-digit ZIP code.',clubs:'Enter a number of clubs (1–30).'};
f.addEventListener('submit',e=>{
  e.preventDefault();let first=null;
  Object.keys(msgs).forEach(id=>{const el=document.getElementById(id),er=document.getElementById(id+'-err');
    const ok=el.checkValidity();er.textContent=ok?'':msgs[id];el.setAttribute('aria-invalid',!ok);
    if(!ok){el.setAttribute('aria-describedby',id+'-err');if(!first)first=el;}else el.removeAttribute('aria-describedby');});
  const s=document.getElementById('form-status');
  if(first){first.focus();s.textContent='Please fix the highlighted fields.';return;}
  if(f.botcheck&&f.botcheck.checked)return;
  const b=f.querySelector('button[type=submit]');b.disabled=true;s.className='form-status';s.textContent='Sending…';
  fetch(f.action,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)})
    .then(r=>r.json().then(d=>({ok:r.ok,d})))
    .then(({ok,d})=>{if(ok&&d.success){s.classList.add('ok');s.textContent='Thanks! Your quote request was sent. We\'ll be in touch soon.';f.reset();}else throw new Error(d.message||'error');})
    .catch(()=>{s.classList.add('bad');s.textContent='Sorry, something went wrong. Please call (954) 303-2157 or email support@gripshepherd.com.';})
    .finally(()=>{b.disabled=false;});
});
