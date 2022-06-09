// Meters to Feet -> 3.2808
// Liters to Gallon -> 0.264172
// Kilograms to Pounds -> 2.2046

function lengthConvert(valInt) {
    // Storing the input in Meters from user in numb after multiplying it into Feet
    numb = valInt*3.2808;
    // Rounding down the numb variable to only contain two decimal points
    let roundedDown = Math.round((numb + Number.EPSILON) * 100) / 100;
    //changing the html of feet-calc to represent the rounded down awnser.
    document.getElementById("feet-calc").textContent=roundedDown;
};
//Check comments from lengthConvert for breakdown of this fucntion
function volumeConvert(valInt) {
    numb = valInt*0.264172;
    let roundedDown = Math.round((numb + Number.EPSILON) * 100) / 100;
    document.getElementById("gallon-calc").textContent=roundedDown;
};
//Check comments from lengthConvert for breakdown of this fucntion
function massConvert(valInt) {
    numb = valInt*2.2046;
    let roundedDown = Math.round((numb + Number.EPSILON) * 100) / 100;
    document.getElementById("pound-calc").textContent=roundedDown;
};
