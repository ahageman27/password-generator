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

const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

const lowercaseCheck = document.querySelector("#lowercase");
const uppercaseCheck = document.querySelector("#uppercase");
const numericCheck = document.querySelector("#numeric");
const specialCheck = document.querySelector("#special");
var passwordCharacters = []

function updateSelections() {
  selections.length = document.querySelector("#length").value;
  selections.lowercase = lowercaseCheck.checked;
  selections.uppercase = uppercaseCheck.checked;
  selections.numeric = numericCheck.checked;
  selections.special = specialCheck.checked;
}

function chooseCharacters() {
  if (selections.lowercase) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
  }
  if (selections.uppercase) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
  }
  if (selections.numeric) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }
  if (selections.special) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
}

function generatePassword() {
  updateSelections();
  chooseCharacters();
  console.log(selections);
  console.log(passwordCharacters);
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
