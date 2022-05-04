// Assignment code here
var selections = {
  length: 8,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
}

for (var i = 8; i < 129; i++) {
  var lengthElement = document.createElement("option");
  lengthElement.textContent = i;
  lengthElement.value = i;
  document.getElementById("length").appendChild(lengthElement);
}

const lowercaseCheck = document.querySelector("#lowercase");
const uppercaseCheck = document.querySelector("#uppercase");
const numericCheck = document.querySelector("#numeric");
const specialCheck = document.querySelector("#special");



function generatePassword() {
  selections.length = document.querySelector("#length").value;
  selections.lowercase = lowercaseCheck.checked;
  selections.uppercase = uppercaseCheck.checked;
  selections.numeric = numericCheck.checked;
  selections.special = specialCheck.checked;
  console.log(selections)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
