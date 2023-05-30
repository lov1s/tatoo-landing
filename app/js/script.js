let coll = document.getElementsByClassName("faq__collapsible");
let i;
const logo = document.querySelector(".logo");
const widthScreen = document.documentElement.clientWidth;
const header = document.querySelector(".header__main");
const checkbox = document.getElementById('menuCheckbox');
var element = document.querySelector("#about");
var element = document.querySelector("#post-container");
var element = document.querySelector("#post-container");
var element = document.querySelector("#post-container");
let nav = document.querySelector('.sidenav');
let navlinks = nav.getElementsByTagName('a');
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("faq__active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
if(widthScreen <= 1024){
  header.append(logo);
}



// function toggleNav() {
//     (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
//   }

//   document.querySelector('.nav-icon').addEventListener('click', function(e) {
//     e.preventDefault();
//     toggleNav();
// });

// for(let i = 0; i < navlinks.length; i++) {
//     navlinks[i].addEventListener('click', function() {
//       toggleNav();
//   });
// }

const triggers = [].slice.call(document.querySelectorAll('.sidenav__link'));
triggers.forEach(function (ele) {
    ele.addEventListener('click', function(){clickHandler(ele)});
    
});
const clickHandler = (e) =>{
  // Prevent the default action

  // Get the `href` attribute
  
  if(widthScreen <= 1024){
    
    checkbox.checked = false;
  }

  
};
// window.scrollTo({ top, left, behavior: 'smooth' });

const duration = 800;


const scrollToTarget = function (target) {
    const top = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const diff = top;

    let startTime = null;
    let requestId;

    const loop = function (currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }

        // Elapsed time in miliseconds
        const time = currentTime - startTime;

        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startPos + diff * percent);

        if (time < duration) {
            // Continue moving
            requestId = window.requestAnimationFrame(loop);
        } else {
            window.cancelAnimationFrame(requestId);
        }
    };
    requestId = window.requestAnimationFrame(loop);
};
// const time = currentTime - startTime;
// const percent = Math.min(time / duration, 1);
// window.scrollTo(0, startPos + diff * percent);
// if (time < duration) {
//   // Continue moving
//   requestId = window.requestAnimationFrame(loop);
// } else {
//   window.cancelAnimationFrame(requestId);
// }