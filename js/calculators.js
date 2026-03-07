function calcSalary(){

let gross = document.getElementById("salaryInput").value;

let tax = gross * 0.2;

let unemployment = gross * 0.016;

let pension = gross * 0.02;

let net = gross - tax - unemployment - pension;

document.getElementById("salaryResult").innerText =
Math.round(net);

}



function calcDividend(){

let amount = document.getElementById("dividendInput").value;

let tax = amount * 0.2;

document.getElementById("dividendResult").innerText =
Math.round(tax);

}



function calcVAT(){

let amount = document.getElementById("vatInput").value;

let vat = amount * 0.22;

document.getElementById("vatResult").innerText =
Math.round(vat);

}