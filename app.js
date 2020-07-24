const projectBtn = document.querySelector('.project-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

projectBtn.addEventListener('click', function(){
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal');
});