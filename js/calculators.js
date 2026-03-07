function salaryCalc(){

let g = document.getElementById("salary").value

let tax = g*0.2
let pension = g*0.02
let unemployment = g*0.016

let net = g-tax-pension-unemployment

document.getElementById("salaryResult").innerText =
"Net: "+Math.round(net)+" €"

}

function dividendCalc(){

let d = document.getElementById("dividend").value

let tax = d*0.2

document.getElementById("dividendResult").innerText =
"Tax: "+Math.round(tax)+" €"

}

function vatCalc(){

let v = document.getElementById("vat").value

document.getElementById("vatResult").innerText =
"VAT: "+Math.round(v*0.22)+" €"

}

function incomeCalc(){

let i = document.getElementById("income").value

document.getElementById("incomeResult").innerText =
"Tax: "+Math.round(i*0.2)+" €"

}

function freelanceCalc(){

let f = document.getElementById("freelance").value

document.getElementById("freelanceResult").innerText =
"After tax: "+Math.round(f*0.78)+" €"

}