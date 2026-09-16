const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const menu=$('.menu-btn'), nav=$('.nav-links');
if(menu) menu.onclick=()=>nav.classList.toggle('open');
$$('.nav-links a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));
$$('.faq-item button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));
const glow=$('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const code=$('#typing');
if(code){const lines=['const idea = "your vision";','const solution = build(idea);','launch(solution);'];let l=0,c=0,t='';const type=()=>{if(l<lines.length){if(c<lines[l].length){t+=lines[l][c++];code.textContent=t+'▌';setTimeout(type,38)}else{t+='\n';l++;c=0;setTimeout(type,250)}}else code.textContent=t};type();}
const form=$('#inquiryForm');
if(form) form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Hello D.BROWN GLOBAL TALENT TECH LTD,\n\nMy name is ${d.get('name')}.\nCompany: ${d.get('company')||'N/A'}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\n\nProject details:\n${d.get('details')}`;window.open('https://wa.me/2348146560741?text='+encodeURIComponent(msg),'_blank')});