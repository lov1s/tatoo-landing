let coll = document.getElementsByClassName("faq__collapsible");
let i;
const logo = document.querySelector(".logo");
const widthScreen = document.documentElement.clientWidth;
const header = document.querySelector(".header__main");
var element = document.querySelector("#about");
var element = document.querySelector("#post-container");
var element = document.querySelector("#post-container");
var element = document.querySelector("#post-container");

console.log(logo);
console.log(header);

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

var nav = document.querySelector('.sidenav');
var navlinks = nav.getElementsByTagName('a');

function toggleNav() {
    (nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
  }

document.getElementById('nav-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});

for(let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener('click', function() {
      toggleNav();
  });
}

const triggers = [].slice.call(document.querySelectorAll('.sidenav__link'));
triggers.forEach(function (ele) {
    ele.addEventListener('click', clickHandler);
});
const clickHandler = function (e) {
  // Prevent the default action
  e.preventDefault();

  // Get the `href` attribute
  const href = e.target.getAttribute('href');
  const id = href.substr(1);
  const target = document.getElementById(id);

  scrollToTarget(target);
};
window.scrollTo({ top, left, behavior: 'smooth' });

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
const time = currentTime - startTime;
const percent = Math.min(time / duration, 1);
window.scrollTo(0, startPos + diff * percent);
if (time < duration) {
  // Continue moving
  requestId = window.requestAnimationFrame(loop);
} else {
  window.cancelAnimationFrame(requestId);
}