function hPlusToPh() {

    var number1 = document.getElementById('numberField1').value;

    number1 = new BigNumber(number1);

    var resultBox = document.getElementById('result');

    if (number1 == NaN) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        resultBox.innerHTML = -Math.log10(number1.toNumber());
    }

}