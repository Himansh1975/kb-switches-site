const products = [
  {name:'Black glass · 8M',finish:'Glass',size:'8 M',image:'panel-000.jpg',configuration:'8M+6SR+SOC-1'},
  {name:'Black acrylic · 8M',finish:'Acrylic',size:'8 M',image:'panel-004.jpg',configuration:'8M+7S+SOC-2'},
  {name:'White glass · 6M',finish:'Glass',size:'6 M',image:'panel-006.jpg',configuration:'6M+7S+SOC-1'},
  {name:'Roma · 4 switches',finish:'Roma',size:'2 M',image:'panel-010.jpg',configuration:'2M+4S ROMA'},
  {name:'Roma · fan control',finish:'Roma',size:'2 M',image:'panel-011.jpg',configuration:'2M+FAN+ROMA'},
  {name:'Roma · 15A',finish:'Roma',size:'2 M',image:'panel-013.jpg',configuration:'2M+15A ROMA'}
];
const grid=document.querySelector('#product-grid');
const dialog=document.querySelector('#product-dialog');
function renderProducts(filter='all') {
 const selected=products.filter(p=>filter==='all'||p.finish===filter);
 grid.innerHTML=selected.map(p=>`<button class="product-card" data-product="${products.indexOf(p)}" aria-label="Explore ${p.name}"><div class="product-image"><span class="size">${p.size}</span><img src="Assets/${p.image}" alt="${p.name} touch panel" loading="lazy"></div><div class="product-info"><div><small>${p.finish==='Roma'?'MODULAR TOUCH':p.finish.toUpperCase()+' FINISH'}</small><h3>${p.name}</h3></div><span aria-hidden="true">↗</span></div></button>`).join('');
 document.querySelector('#product-count').textContent=`${selected.length} configuration${selected.length===1?'':'s'}`;
}
renderProducts();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});renderProducts(button.dataset.filter);
}));
grid.addEventListener('click',event=>{
 const button=event.target.closest('[data-product]');if(!button)return;const p=products[button.dataset.product];
 document.querySelector('#dialog-content').innerHTML=`<div class="dialog-image"><img src="Assets/${p.image}" alt="${p.name} touch panel"></div><p class="eyebrow">THE KB COLLECTION</p><h2>${p.name}</h2><dl><dt>Range</dt><dd>${p.finish}</dd><dt>Panel size</dt><dd>${p.size}</dd><dt>Configuration</dt><dd>${p.configuration}</dd></dl><p>Find the right fit for your space. Our team can help you confirm controls, wiring compatibility and availability.</p><a class="button button-dark" href="#contact" id="product-enquire">Ask about this panel <span>↗</span></a><a class="text-link" href="Assets/kb-catalogue.pdf" target="_blank" rel="noopener">View the full catalogue ↗</a>`;
 dialog.showModal();
 document.querySelector('#product-enquire').addEventListener('click',()=>{document.querySelector('#interest').value=p.finish+' '+(p.finish==='Roma'?'switches':'panels');document.querySelector('#message').value=`I’m interested in ${p.name} (${p.configuration}). Please share more details.`;dialog.close();setTimeout(()=>document.querySelector('#name').focus({preventScroll:true}),100)});
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.querySelector('#enquiry').addEventListener('submit',event=>{event.preventDefault();const name=document.querySelector('#name');if(!name.value.trim()){name.setCustomValidity('Please enter your name.');name.reportValidity();return}name.setCustomValidity('');const text=`Hello KB Switches! I’m ${name.value.trim()}.\nI’m interested in: ${document.querySelector('#interest').value}.\n${document.querySelector('#message').value.trim()}`;window.open('https://wa.me/917990414919?text='+encodeURIComponent(text),'_blank','noopener,noreferrer')});
document.querySelector('#name').addEventListener('input',event=>event.target.setCustomValidity(''));
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause()})));
document.querySelector('#year').textContent=new Date().getFullYear();

const moodLabels={relax:'Time to unwind',evening:'Evening glow',bright:'A warm welcome'};
document.querySelectorAll('.mood-controls button').forEach(button=>button.addEventListener('click',()=>{
 const mood=button.dataset.mood;document.querySelector('.product-hero').dataset.mood=mood;
 document.querySelectorAll('.mood-controls button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 document.querySelector('#mood-status').textContent=moodLabels[mood];
}));
const filmDurations={'video-dealer-review':'0:47','video-company-film':'0:40','video-ahmedabad-1':'1:12','video-ahmedabad-2':'1:27'};
document.querySelectorAll('.film-play').forEach(button=>{
 const video=document.getElementById(button.dataset.video);const player=button.closest('.film-player');const error=player.parentElement.querySelector('.film-error');
 button.hidden=false;video.controls=false;
 player.querySelector('.film-duration').textContent=filmDurations[video.id];
 button.addEventListener('click',async()=>{button.hidden=true;video.controls=true;error.hidden=true;try{await video.play();video.focus()}catch{error.hidden=false;video.controls=true;player.classList.add('playing')}});
 video.addEventListener('play',()=>{button.hidden=true;video.controls=true;player.classList.add('playing')});
 video.addEventListener('ended',()=>{button.hidden=false;video.controls=false;player.classList.remove('playing')});
});
