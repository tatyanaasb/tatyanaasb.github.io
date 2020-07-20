const aboutBtn = document.querySelector('.about-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

aboutBtn.addEventListener('click', function(){
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal');
});