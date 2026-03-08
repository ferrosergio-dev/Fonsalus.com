document.addEventListener("DOMContentLoaded",()=>{

const hero=document.querySelector(".hero")

hero.style.opacity=1

})

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero")

hero.style.opacity=1-window.scrollY/800

})