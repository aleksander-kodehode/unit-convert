// Meters to Feet -> 3.2808
// Liters to Gallon -> 0.264172
// Kilograms to Pounds -> 2.2046

function lengthConvert(valInt) {
    numb = valInt*3.2808;
    let roundedDown = Math.round((numb + Number.EPSILON) * 100) / 100;
    document.getElementById("feet-calc").innerHTML=roundedDown;
}

function volumeConvert(valInt) {
    numb = valInt*0.264172;
    let roundedDown = Math.round((numb + Number.EPSILON) * 100) / 100;
    document.getElementById("gallon-calc").innerHTML=roundedDown;
}

function massConvert(valInt) {
    numb = valInt*2.2046;
    let roundedDown = Math.round((numb + Number.EPSILON) * 100) / 100;
    document.getElementById("pound-calc").innerHTML=roundedDown;
}
