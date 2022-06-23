function addTwoNumbers() {

    var number1 = document.getElementById('numberField1').value;
    var number2 = document.getElementById('numberField2').value;

    number1 = new BigNumber(number1);
    number2 = new BigNumber(number2);

    var resultBox = document.getElementById('result');

    if ((number1 == NaN) || (number2 == NaN)) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        resultBox.innerHTML = number1.plus(number2);
    }

}