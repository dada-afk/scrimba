const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.getElementById("password-el-one");
let passwordElTwo = document.getElementById("password-el-two");

let lengthEl = document.getElementById("length-el");
let userInput = 0;
let errorText = document.getElementById("error-text");


function generatePassword() {
    errorText.textContent = "";
    passwordElOne.textContent = "";
    passwordElTwo.textContent = "";
    getUserInput();
    
    if(userInput > 7 && userInput < 21) {
        for (let i = 0; i < userInput; i++) {
            let randomCharacterOne = Math.floor(Math.random() * characters.length);
            passwordElOne.textContent += characters[randomCharacterOne];
            
            let randomCharacterTwo = Math.floor(Math.random() * characters.length);
            passwordElTwo.textContent += characters[randomCharacterTwo];
       }
    } else {
        errorText.textContent = "The password length should be between 8 and 20.";
    }
    
}

function getUserInput() {
    userInput = document.getElementById("user-input").value;
}