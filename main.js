const aboutBtn = document.querySelectorAll('.about-btn');
const headerOverlay = document.querySelectorAll('.header-overlay');
const closeBtn = document.querySelectorAll('.close-btn');

aboutBtn.addEventListener('click', function(){
    headerOverlay.classList.add('open-overlay');
});

closeBtn.addEventListener('click', function(){
    headerOverlay.classList.toggle('open-overlay');
});