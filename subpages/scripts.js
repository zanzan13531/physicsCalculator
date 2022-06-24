function recalculateDroppedFromRest() {
    positionDroppedFromRest();
    velocityDroppedFromRest();
    timeDroppedFromRest();
}

function positionDroppedFromRest() {

    var acceleration = document.getElementById('acceleration').value;
    var deltaX = document.getElementById('deltaX').value;

    acceleration = new BigNumber(acceleration);
    deltaX = new BigNumber(deltaX);

    var resultBox = document.getElementById('positionResult');

    if ((acceleration == NaN) || (deltaX == NaN)) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        var deltaT = deltaX.times(2).div(acceleration);
        deltaT = deltaT.pow(0.5);
        var vFinal = deltaT.times(acceleration);
        resultBox.innerHTML = "Δt = " + deltaT.toString() + "<br>" + "Vf = " + vFinal.toString();
    }
    
}

function velocityDroppedFromRest() {

    var acceleration = document.getElementById('acceleration').value;
    var vFinal = document.getElementById('vFinal').value;

    acceleration = new BigNumber(acceleration);
    vFinal = new BigNumber(vFinal);

    var resultBox = document.getElementById('velocityResult');

    if ((acceleration == NaN) || (vFinal == NaN)) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        var deltaT = vFinal.div(acceleration);
        var deltaX = deltaT.times(deltaT).times(acceleration).times(0.5);
        resultBox.innerHTML = "Δt = " + deltaT.toString() + "<br>" + "Δx = " + deltaX.toString();
    }

}

function timeDroppedFromRest() {

    var acceleration = document.getElementById('acceleration').value;
    var deltaT = document.getElementById('deltaT').value;

    acceleration = new BigNumber(acceleration);
    deltaT = new BigNumber(deltaT);

    var resultBox = document.getElementById('timeResult');

    if ((acceleration == NaN) || (deltaT == NaN)) {
        resultBox.innerHTML = "Invalid Input";
    } else {
        var vFinal = deltaT.times(acceleration);
        var deltaX = deltaT.times(deltaT).times(acceleration).times(0.5);
        resultBox.innerHTML = "Vf = " + vFinal.toString() + "<br>" + "Δx = " + deltaX.toString();
    }

}