// Website assignmemt 

// Variables for HTML Elements

let ansInput1El = document.getElementById("answer 1");
let ansInput2El = document.getElementById("answer 2");
let ansInput3El = document.getElementById("answer 3");
let ansInput4El = document.getElementById("answer 4");
let ansInput5El = document.getElementById("answer 5");
let resultsbuttonEl = document.getElementById("resultsbutton");
let feedback1El = document.getElementById("feedback1");
let feedback2El = document.getElementById("feedback2");
let feedback3El = document.getElementById("feedback3");
let feedback4El = document.getElementById("feedback4");
let feedback5El = document.getElementById("feedback5");

// Add Event Listener
resultsbuttonEl.addEventListener("click", responseOut);

//Event Functions
function responseOut() {
console.log(queIn);

// Answer vertfiy and marks

// Question one 
//  Add "El" to every ansInput1 variable
 if (ansInput1 === 'oui') {
     ansInput1El.style.border = '2px solid green';
//   Create a variable for this first so that it can make changes to that vairable; because there is no variable with the name "totalMar".
    totalMar++;
    feedback1El.innerHTML = ' Correct';
 } else if (ansInput1 !== 'oui') {
    ansInput1El.style.border = '2px solid red';
     feedback1El.innerHTML=' Incorrect';
 }

// Question two
if (ansInput2 === 'Les glucides, Lipides, Protéines, Vitamines, Minéraux' || ans2In === 'les glucides, lipides, protéines, vitamines, minéraux') {
    ansInput2El.style.border = '2px solid green';
    totalMar++;
    feedback2El.innerHTML = ' Correct';
 } else if (ansInput2 !== 'Les glucides, Lipides, Protéines, Vitamines, Minéraux' || ans2In !== 'les glucides, lipides, protéines, vitamines, minéraux') {
    ansInput2El.style.border = '2px solid red';
     feedback2El.innerHTML=' Incorrect';
 }

 // Question three
 if (ansInput3 === 'carbone, hydrogène, oxygène') {
    ansInput3El.style.border = '2px solid green';
    totalMar++;
    feedback3El.innerHTML = ' Correct';
 } else if (ansInput3 !== 'carbone, hydrogène, oxygène') {
    ansInput3El.style.border = '2px solid red';
     feedback3El.innerHTML=' Incorrect';
 }

// Question four
if (ansInput4 === 'stockage d'énergie à long terme') {
    ansInput4El.style.border = '2px solid green';
    totalMar++;
    feedback4El.innerHTML = ' Correct';
 } else if (ansInput4 !== 'stockage d'énergie à long terme') {
    ansInput4El.style.border = '2px solid red';
     feedback4El.innerHTML= ' Incorrect';
 }

// Question five
if (ansInput5 === 'la forme de la protéine') {
    ansInput5El.style.border = '2px solid green';
    totalMar++;
    feedback5El.innerHTML = ' Correct';
 } else if (ansInput5 !== 'la forme de la protéine') {
     ansInput5El.style.border = '2px solid red';
     feedback5El.innerHTML=' Incorrect';
 }
  

//Total marks after addition 
//  Where is thus element in the HTML?
totalmarkEl.innerHTML = +totalMar;

//Precent calculation
precent = (totalMar / 5) * 100;
precentEl.innerHTML = +percent;

if(percent === 100) {
    // you did it statment 
    responeEl.innerHTML = 'Jy suis arrivé!';
} else {
    // try again statement 
    responseEl.innerHTML = 'Tu peux faire mieux'
}
