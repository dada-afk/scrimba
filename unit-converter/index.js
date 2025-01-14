/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");

const inputEl = document.getElementById("input-el");

const errorMsg = document.getElementById("error-msg");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
    let value = inputEl.value;
    
    if (value === "") {
        errorMsg.textContent = "*Please provide value";
    } else if (isNaN(value)) {
        errorMsg.textContent = "*Input should be number"
    } else {
        errorMsg.textContent = "";
        
        lengthEl.innerHTML = `${value} meters = ${(value * 3.281).toFixed(3)} feet 
        | ${value} feet = ${(value / 3.281).toFixed(3)} meters`
        
        volumeEl.innerHTML = `${value} liters = ${(value * 0.264).toFixed(3)} gallons 
        | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`
        
        massEl.innerHTML = `${value} kilograms = ${(value * 2.204).toFixed(3)} pounds 
        | ${value} pounds = ${(value / 2.204).toFixed(3)} kilograms`
    }
});