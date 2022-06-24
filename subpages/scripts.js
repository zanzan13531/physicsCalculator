function recalculateDroppedFromRest() {
    positionDroppedFromRest();
    velocityDroppedFromRest();
    timeDroppedFromRest();
}

function positionDroppedFromRest() {

    var acceleration = document.getElementById('acceleration').value;
    var deltaX = document.getElementById('deltaX').value;

    acceleration = new BigNumber(number1);
    deltaX = new BigNumber(number2);

    var resultBox = document.getElementById('positionResult');

    if ((acceleration == NaN) || (deltaX == NaN)) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        var deltaT = deltaX.times(2).divideBy(acceleration).sqrt();
        var vFinal = deltaT.times(acceleration);
        resultBox.innerHTML = "Δt = " + deltaT + "<br>" + "Vf = " + vFinal;
    }
    
}

function velocityDroppedFromRest() {

    var acceleration = document.getElementById('acceleration').value;
    var vFinal = document.getElementById('vFinal').value;

    acceleration = new BigNumber(number1);
    vFinal = new BigNumber(number2);

    var resultBox = document.getElementById('velocityResult');

    if ((acceleration == NaN) || (vFinal == NaN)) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        var deltaT = vFinal.divideBy(acceleration);
        var deltaX = deltaT.times(deltaT).times(acceleration).times(0.5);
        resultBox.innerHTML = "Δt = " + deltaT + "<br>" + "Δx = " + deltaX;
    }

}

function timeDroppedFromRest() {

    var acceleration = document.getElementById('acceleration').value;
    var deltaT = document.getElementById('deltaT').value;

    acceleration = new BigNumber(number1);
    deltaT = new BigNumber(number2);

    var resultBox = document.getElementById('timeResult');

    if ((acceleration == NaN) || (deltaT == NaN)) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        var deltaV = deltaT.times(acceleration);
        var deltaX = deltaT.times(deltaT).times(acceleration).times(0.5);
        resultBox.innerHTML = "Vf = " + vFinal + "<br>" + "Δx = " + deltaX;
    }

}