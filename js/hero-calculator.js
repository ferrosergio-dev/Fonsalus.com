function salaryCalcHero(){

let g=document.getElementById("salaryHero").value

let net=g*0.764

document.getElementById("salaryHeroResult")
.innerText="Net: "+Math.round(net)+" €"

}