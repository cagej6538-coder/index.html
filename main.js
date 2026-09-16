
const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
window.addEventListener('load',()=>setTimeout(()=>$('.preloader')?.classList.add('hide'),220));
const menu=$('.menu-btn'), links=$('.nav-links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const page=document.body.dataset.page; if(page) $$(`.nav-links a[data-nav="${page}"]`).forEach(a=>a.classList.add('active'));
const progress=$('#progress');
window.addEventListener('scroll',()=>{if(progress){const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max?d.scrollTop/max*100:0)+'%'}});
const revealIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealIO.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>revealIO.observe(el));
const glow=$('.cursor-glow'); window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
$$('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); const f=btn.dataset.filter; $$('.portfolio-item').forEach(item=>{item.hidden=!(f==='all'||item.dataset.cat===f)}) }));
const typing=$('#typing');
if(typing){const lines=['const idea = "your vision";','const solution = build(idea);','launch(solution);'];let l=0,c=0,t='';const type=()=>{if(l<lines.length){if(c<lines[l].length){t+=lines[l][c++];typing.textContent=t+'▌';setTimeout(type,35)}else{t+='\n';l++;c=0;setTimeout(type,230)}}else typing.textContent=t};type();}
$$('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{if(window.innerWidth<900)return;const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(850px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg) translateY(-4px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
const form=$('#inquiryForm');
if(form) form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Hello D.BROWN GLOBAL TALENT TECH LTD,\n\nMy name is ${d.get('name')}.\nCompany: ${d.get('company')||'N/A'}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\nService required: ${d.get('service')}\n\nProject details:\n${d.get('details')}`;window.open('https://wa.me/2348146560741?text='+encodeURIComponent(msg),'_blank','noopener')});
