(()=>{var e={945:()=>{var e,t;e=document.querySelector('meta[name="viewport"]'),t=function(){var t=window.outerWidth>360?"width=device-width,initial-scale=1":"width=360";e.getAttribute("content")!==t&&e.setAttribute("content",t)},window.addEventListener("resize",t),t(),document.addEventListener("DOMContentLoaded",(function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("is-inview")}))}),{threshold:.1});document.querySelectorAll(".js-fade, .js-fadeup, .js-fadein").forEach((function(t){e.observe(t)}));var t=document.querySelector(".js-anchor-link");if(t){var o=t.offsetHeight;document.querySelectorAll(".js-scroll-link").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var r=e.getAttribute("href").substring(1);if(""!==r){var n=document.getElementById(r).getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:n,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"})}))}))}}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(945)})()})();