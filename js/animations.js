window.addEventListener("scroll",()=>{

let hero=document.querySelector(".hero")

hero.style.opacity=1-window.scrollY/800

})