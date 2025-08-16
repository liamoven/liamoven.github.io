// Essential functionality only - optimized for performance
const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');
hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');navMenu.classList.toggle('active')});
document.querySelectorAll('.nav-link').forEach(n=>n.addEventListener('click',()=>{hamburger.classList.remove('active');navMenu.classList.remove('active')}));
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth',block:'start'})}})});
window.addEventListener('scroll',()=>{const navbar=document.querySelector('.navbar');if(window.scrollY>50){navbar.style.background='rgba(255, 255, 255, 0.98)';navbar.style.boxShadow='0 2px 20px rgba(0, 0, 0, 0.1)'}else{navbar.style.background='rgba(255, 255, 255, 0.95)';navbar.style.boxShadow='none'}});