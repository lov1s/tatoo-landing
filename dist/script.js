"use strict";var i,coll=document.getElementsByClassName("faq__collapsible"),logo=document.querySelector(".logo"),widthScreen=document.documentElement.clientWidth,header=document.querySelector(".header__main"),element=document.querySelector("#about");element=document.querySelector("#post-container"),element=document.querySelector("#post-container"),element=document.querySelector("#post-container");for(console.log(logo),console.log(header),i=0;i<coll.length;i++)coll[i].addEventListener("click",(function(){this.classList.toggle("faq__active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"}));widthScreen<=1024&&header.append(logo);var nav=document.querySelector(".sidenav"),navlinks=nav.getElementsByTagName("a");function toggleNav(){nav.classList.contains("active")?nav.classList.remove("active"):nav.classList.add("active")}document.getElementById("nav-icon").addEventListener("click",(function(e){e.preventDefault(),toggleNav()}));for(var _i=0;_i<navlinks.length;_i++)navlinks[_i].addEventListener("click",(function(){toggleNav()}));var triggers=[].slice.call(document.querySelectorAll(".sidenav__link"));triggers.forEach((function(e){e.addEventListener("click",clickHandler)}));var clickHandler=function(e){e.preventDefault();var t=e.target.getAttribute("href").substr(1),n=document.getElementById(t);scrollToTarget(n)};window.scrollTo({top:top,left:left,behavior:"smooth"});var duration=800,scrollToTarget=function(e){var t,n=e.getBoundingClientRect().top,o=window.pageYOffset,i=n,l=null;t=window.requestAnimationFrame((function e(n){l||(l=n);var a=n-l,r=Math.min(a/duration,1);window.scrollTo(0,o+i*r),a<duration?t=window.requestAnimationFrame(e):window.cancelAnimationFrame(t)}))},time=currentTime-startTime,percent=Math.min(time/duration,1);window.scrollTo(0,startPos+diff*percent),time<duration?requestId=window.requestAnimationFrame(loop):window.cancelAnimationFrame(requestId);
//# sourceMappingURL=script.js.map