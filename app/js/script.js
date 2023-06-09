let coll = document.getElementsByClassName("faq__collapsible");
let i;
const logo = document.querySelector(".logo");
const widthScreen = document.documentElement.clientWidth;
const header = document.querySelector(".header__main");
const checkbox = document.getElementById('menuCheckbox');
const fileInput = document.getElementById('attachment');
const preview = document.querySelector('.preview');
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
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
if(widthScreen <= 1024){
  header.append(logo);
}

fileInput.style.opacity = 0;
fileInput.style.height = 0;

fileInput.addEventListener('change', updateImageDisplay);
function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = fileInput.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
const fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/webp',
];

function validFileType(file) {
return fileTypes.includes(file.type);
}

function returnFileSize(number) {
if(number < 1024) {
  return number + 'bytes';
} else if(number > 1024 && number < 1048576) {
  return (number/1024).toFixed(1) + 'KB';
} else if(number > 1048576) {
  return (number/1048576).toFixed(1) + 'MB';
}
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