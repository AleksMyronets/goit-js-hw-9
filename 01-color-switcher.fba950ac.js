!function(){var t,e=document.querySelector("body"),n=document.getElementById("srart-btn"),d=document.getElementById("stop-btn");n=addEventListener("click",(function(){n.disabled=!0,d.disabled=!1,t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),d=addEventListener("click",(function(){n.disabled=!1,d.disable=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.fba950ac.js.map
