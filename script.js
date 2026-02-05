const cards=document.querySelectorAll('.card,.step');
window.addEventListener('scroll',()=>{cards.forEach(c=>{const t=c.getBoundingClientRect().top;if(t<window.innerHeight-50){c.style.opacity=1;c.style.transform='translateY(0)';}});});
cards.forEach(c=>{c.style.opacity=0;c.style.transform='translateY(40px)';c.style.transition='0.6s';});
