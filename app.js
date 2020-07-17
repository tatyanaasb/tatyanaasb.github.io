const aboutBtn = document.querySelector('.about-btn');
const heroOverlay = document.querySelector('.hero-overlay');
const closeBtn = document.querySelector('.close-btn');

aboutBtn.addEventListener('click', function(){
    heroOverlay.classList.add('open-overlay');
});

closeBtn.addEventListener('click', function(){
    heroOverlay.classList.remove('open-overlay');
});