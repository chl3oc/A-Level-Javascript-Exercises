// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    let numberA = (document.getElementById('numberA').value);
    let numberB = (document.getElementById('numberB').value);
    let numberC = (document.getElementById('numberC').value);
    let average = (numberA + numberB + numberC) / 3;
    let product = numberA * numberB * numberC;
    let expression = numberA + (numberB * numberC);
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    // 2. Calculate:
    //    - (A + B + C) / 3
    //    - A × B × C
    //    - A + (B × C)
    // 3. Display the results in the respective span elements
}
document.getElementById('average').addEventListener('click', output-section);
document.getElementById('product').addEventListener('click', output-section);
document.getElementById('expression').addEventListener('click', output-section);

