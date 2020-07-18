//all buttons
const btn = document.querySelectorAll('.modal-button'); //check code

//all modals
const modals = document.querySelectorAll('.modal');

//close
const close = document.getElementsByClassName("close-btn");

//click & open modal
for (var i = 0; i < btn.length; i++){
    btn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

//close modal
for (var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        for (var index in modals){
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}
// window.onclick = function(event) {
//     if (event.target.classList.contains('modal')) {
//      for (var index in modals) {
//       if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
//      }
//     }
// }










// const aboutBtn = document.querySelector('.about-btn');
// const modal = document.querySelector('.modal');
// const closeBtn = document.querySelector('.close-btn');

// aboutBtn.addEventListener('click', function(){
//     modal.classList.add('open-modal');
// });

// closeBtn.addEventListener('click', function(){
//     modal.classList.remove('open-modal');


// const containers = document.querySelectorAll('.overlay-container');

// containers.forEach(function(container){
//     // console.log(container);
//     const closeBtn = container.querySelector('.close-btn');
//     // console.log(closeBtn);
//     closeBtn.addEventListener('click', function(item) {
//         if (item !== container) {
//             item.classList.remove('.open-overlay');
//         }
//     })
//  });