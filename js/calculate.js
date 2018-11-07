function calculate(callback) {
    let operation = '';
    for (let element of document.getElementsByName('operation')) {
        if (element.checked) {
            operation = element.value;
            break;
        }
    }
    let equationString = document.querySelector(".calculate #numberOne").value + operation + document.querySelector(".calculate #numberTwo").value;
    postCalculate(callback, equationString);
}

function calculateString(callback) {
    postCalculate(callback, document.querySelector("#equationString").value);
}

function showCalculation(result) {
    calculateSide.querySelector(".sidebar-body").classList.remove("loading");
    if (result.solvable) {
        document.querySelector("#calculationResult").innerHTML = result.answer;
    } else {
        document.querySelector("#calculationResult").innerHTML = "The equation is not solvable!";
    }
    document.querySelector(".calculation").classList.remove("none");
}