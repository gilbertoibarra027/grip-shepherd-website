// Mobile nav toggle
const t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
t.addEventListener('click',()=>{const o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',!o);n.classList.toggle('open',!o);t.setAttribute('aria-label',o?'Open menu':'Close menu');});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');t.setAttribute('aria-expanded','false');}));
// Front-end validation only: no submission endpoint
const f=document.getElementById('quote-form');
const msgs={name:'Please enter your name.',phone:'Enter a valid phone number.',email:'Enter a valid email address.',zip:'Enter a 5-digit ZIP code.',clubs:'Enter a number of clubs (1–30).'};
f.addEventListener('submit',e=>{
  e.preventDefault();let first=null;
  Object.keys(msgs).forEach(id=>{const el=document.getElementById(id),er=document.getElementById(id+'-err');
    const ok=el.checkValidity();er.textContent=ok?'':msgs[id];el.setAttribute('aria-invalid',!ok);
    if(!ok){el.setAttribute('aria-describedby',id+'-err');if(!first)first=el;}else el.removeAttribute('aria-describedby');});
  const s=document.getElementById('form-status');
  if(first){first.focus();s.textContent='Please fix the highlighted fields.';return;}
  s.textContent='Thanks! (Prototype: request not sent.)';f.reset();
});
