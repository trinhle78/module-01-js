var firstNumber, secondNumber;

function getCurrentNumbers() {
    firstNumber = Number(document.getElementById("firstNumber").value);
    secondNumber = Number(document.getElementById("secondNumber").value);
}

function getResult(abc) {
    getCurrentNumbers();
    let addition = eval(`${firstNumber}${abc}${secondNumber}`);
    document.getElementById("result").innerText = "Result Addition = " + addition;
}
console.log("So thu nhat la : " + firstNumber + "va so thu 2 la : " +secondNumber);
console.log(`So thu nhat la : ${firstNumber} va so thu 2 la : ${secondNumber}`);


// function getResultAddition() {
//     getCurrentNumbers();
//     let addition = firstNumber + secondNumber;
//     document.getElementById("result").innerText = "Result Addition = " + addition;
// }
// function getResultSubtraction() {
//     getCurrentNumbers();
//     let subtraction = firstNumber - secondNumber;
//     document.getElementById("result").innerText = "Result Subtraction = " + subtraction;
// }
// function getResultMultiplication() {
//     getCurrentNumbers();
//     let multiplication = firstNumber * secondNumber;
//     document.getElementById("result").innerText = "Result Multiplication = " + multiplication;
// }
// function getResultDivision() {
//     getCurrentNumbers();
//     let division = firstNumber / secondNumber;
//     document.getElementById("result").innerText = "Result Division = " + division;
// }
//Phía trên là trường hợp sử dụng 4 hàm cho riêng từng nút


