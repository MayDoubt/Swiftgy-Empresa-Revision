!function(){function t(t){const e=Array.from(document.querySelectorAll(".sticky-container")).filter((function(t){return function(t){const e=t.getBoundingClientRect();return e.top<=0&&e.bottom>document.documentElement.clientHeight}(t)}))[0];if(!e)return;var n=e.offsetTop<document.documentElement.scrollTop,o=e.offsetTop+e.offsetHeight>document.documentElement.scrollTop;n&&o&&(e.querySelector("main").scrollLeft+=t.deltaY)}document.querySelectorAll(".sticky-container").forEach((function(t){const e=t.querySelector("main").scrollWidth;t.setAttribute("style","height: "+e+"px")})),window.addEventListener("wheel",t)}();
//# sourceMappingURL=horizontal-nav.js.map
