"use strict";function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i,coll=document.getElementsByClassName("faq__collapsible"),logo=document.querySelector(".logo"),widthScreen=document.documentElement.clientWidth,header=document.querySelector(".header__main"),checkbox=document.getElementById("menuCheckbox"),fileInput=document.getElementById("attachment"),preview=document.querySelector(".preview"),element=document.querySelector("#about"),nav=(element=document.querySelector("#post-container"),element=document.querySelector("#post-container"),element=document.querySelector("#post-container"),document.querySelector(".sidenav")),navlinks=nav.getElementsByTagName("a");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",(function(){this.classList.toggle("faq__active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}));function updateImageDisplay(){for(;preview.firstChild;)preview.removeChild(preview.firstChild);var e=fileInput.files;if(0===e.length){var t=document.createElement("p");t.textContent="No files currently selected for upload",preview.appendChild(t)}else{var n=document.createElement("ol");preview.appendChild(n);var r,i=_createForOfIteratorHelper(e);try{for(i.s();!(r=i.n()).done;){var o=r.value,a=document.createElement("li"),l=document.createElement("p");if(validFileType(o)){l.textContent="File name ".concat(o.name,", file size ").concat(returnFileSize(o.size),".");var c=document.createElement("img");c.src=URL.createObjectURL(o),a.appendChild(c),a.appendChild(l)}else l.textContent="File name ".concat(o.name,": Not a valid file type. Update your selection."),a.appendChild(l);n.appendChild(a)}}catch(e){i.e(e)}finally{i.f()}}}widthScreen<=1024&&header.append(logo),fileInput.style.opacity=0,fileInput.style.height=0,fileInput.addEventListener("change",updateImageDisplay);var fileTypes=["image/jpeg","image/pjpeg","image/png","image/webp"];function validFileType(e){return fileTypes.includes(e.type)}function returnFileSize(e){return e<1024?e+"bytes":e>1024&&e<1048576?(e/1024).toFixed(1)+"KB":e>1048576?(e/1048576).toFixed(1)+"MB":void 0}var triggers=[].slice.call(document.querySelectorAll(".sidenav__link"));triggers.forEach((function(e){e.addEventListener("click",(function(){clickHandler(e)}))}));var clickHandler=function(e){widthScreen<=1024&&(checkbox.checked=!1)},duration=800,scrollToTarget=function(e){var t,n=e.getBoundingClientRect().top,r=window.pageYOffset,i=n,o=null;t=window.requestAnimationFrame((function e(n){o||(o=n);var a=n-o,l=Math.min(a/duration,1);window.scrollTo(0,r+i*l),a<duration?t=window.requestAnimationFrame(e):window.cancelAnimationFrame(t)}))};
//# sourceMappingURL=script.js.map