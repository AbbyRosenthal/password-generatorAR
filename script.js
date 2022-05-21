// Assignment code here

var uniquePassword = [];
//opening prompt to direct user to create a password
window.alert(" Welcome to Password Generator!  Please answer a few questions before your unique password can be made");



function generatePassword() {
//series of confirms to determine what the user would like to include
if (confirm (" Would you like to include lowercase letters?")) {
  uniquePassword.push ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
}

if (confirm (" Would you like to include uppercase letters?")) {
  uniquePassword.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
}

if (confirm (" Would you like to include special characters?")) {
  uniquePassword.push("!", "@", "#", "$", "%", "&", "*", "<", ">", "+", "-");
}

if (confirm (" Would you like to include numbers?")) {
  uniquePassword.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
}

console.log(uniquePassword);

//prompt password length
var passwordLength = parseInt(prompt( "Please select a number between 8 and 128 for password length."));
console.log(passwordLength);

if (passwordLength < 8) {
  console.log("Password is less than 8")
}

if (passwordLength > 128) {
  console.log("Password is greater than 128")
}

let newPassword = [];

//looping to the length of the password
for (let i = 0; i < passwordLength; i ++) {
 let randomNumber = Math.floor(Math.random() * uniquePassword.length) 
 console.log(randomNumber)
 let oneRandomCharacter = uniquePassword[randomNumber]; 
 console.log(oneRandomCharacter)
 newPassword.push(oneRandomCharacter)
}
console.log(newPassword.join(''));
return newPassword.join('')
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(passwordText)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 