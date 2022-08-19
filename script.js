// Assignment Code
var generateBtn = document.querySelector("#generate");
// This function is what the user uses to select the length of their password and the password must be between 8 and 128 characters
// in length
function getCharacterLength() {
  var length = prompt("How long would you like your password to be? Must be between 8 and 128 characters.");
  if (length < 8) {
    length = prompt("Your password must contain at least 8 characters.");
  } else if (length > 128) {
    length = prompt("Your password cannot be greater than 128 characters.");
  }
  return length;
}

// function useLowerCase() {
//   var lowerCase = window.confirm("Would you like to use lowercase letters?");
//   return lowerCase;
// }

// The following three functions prompt the user to select these options as a yes or no.
function useUpperCase() {
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  return upperCase;
}
function useNumbers() {
  var numeric = window.confirm("Would you like to use numeric characters?");
  return numeric;
}
function useSpecialCharacters() {
  var specialCharacters = window.confirm("Would you like to use special characters?");
  return specialCharacters;
}

// This function is what randomly generates the password, it will randomly fill in the appropriate characters and any characters
// that are left to fill in will be filled in with lowercase umbers using the for loop.
function generatePassword(length, upperCase, numeric, specialCharacters) {
  var password = "";
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var nums = "0123456789";
  var chars = "!@#$%^&*";
  if(upperCase) {
    password = password + uppers[Math.floor(Math.random() * uppers.length)];
  } 
   if (numeric) {
    password = password + nums[Math.floor(Math.random() * nums.length)];
  }
   if (specialCharacters) {
    password = password + chars[Math.floor(Math.random() * chars.length)];
  }
  var currentLength = password.length;
  //  if (lowerCase) { 
    for (var i = 0; i<(length-currentLength); i++) {
      password = password + lowers[Math.floor(Math.random() * lowers.length)];
    // }
    
} 
return password;
}
// Write password to the #password input
function writePassword() {
  var length = getCharacterLength();
  // var lowerCase = useLowerCase();
  var upperCase = useUpperCase();
  var numeric = useNumbers();
  var specialCharacters = useSpecialCharacters();
  if (!upperCase && !numeric && !specialCharacters) {
    upperCase = window.confirm("You must use at least 1 character type, do you want to use upperCase?");
  }
  var password = generatePassword(length, upperCase, numeric, specialCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
