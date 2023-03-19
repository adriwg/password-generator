// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Get references to the #password element
var passwordText = document.querySelector('#password');


// Array holds the characters which the user wants to include in the password
var user_selected_types_of_characters = [];

// Variable holds the password length
var length_password="";



// Function to prompt user for password options
function getPasswordOptions() {
  reset_user_selected_types_of_characters();
  length_password = prompt("Please enter the length of the password you would like to generate:");
  if(Number(length_password) <8 || Number(length_password) >128 || isNaN(length_password)){
    // if length_password  is less than 8 or greater than 128 or non-numeric input
    alert("The password must be between 8 and 128 characters long.");
    length_password ="";
  }else {
    //Prompt the user if they want the password to include lowercase characters
    var includes_lowercase_characters = confirm("Do you want the password to include lowercase characters?");
    if(includes_lowercase_characters){
      // if the user's response is true
      user_selected_types_of_characters.push(lowerCasedCharacters);
    }
    //Prompt the user if they want the password to include lowercase characters
    var includes_uppercase_characters = confirm("Do you want the password to include uppercase characters?");
    // if the user's response is true
    if(includes_uppercase_characters){
      user_selected_types_of_characters.push(upperCasedCharacters);
    }
     //Prompt the user if they want the password to include numeric characters
     var includes_numeric_characters = confirm("Do you want the password to include numeric characters?");
     // if the user's response is true
     if(includes_numeric_characters){
       user_selected_types_of_characters.push(numericCharacters);
     }
     //Prompt the user if they want the password to include special characters
     var includes_special_characters = confirm("Do you want the password to include special characters?");
     // if the user's response is true
     if(includes_special_characters){
       user_selected_types_of_characters.push(specialCharacters);
       generatePassword();
     }else{
      // if user do not choose any type of character, then prompt the user to choose either continues to generate a password with special characters or start again the process
      if(!includes_lowercase_characters && !includes_uppercase_characters && !includes_numeric_characters){
        var confirm_continue = confirm("Password must have at least one character type. Continues to generate a password or start again?");
        if(confirm_continue){
          user_selected_types_of_characters.push(specialCharacters);
          generatePassword();
        }else{
          reset_user_selected_types_of_characters();
        }
       }
     }
  }
}

// // Function to generate password with user input
function generatePassword() {
  var pswd = "";
   var count = length_password;
  while(count>0){
    for (var j= 0; j < user_selected_types_of_characters.length; j++) {
      if(count>0){
        var index = Math.floor(Math.random() * user_selected_types_of_characters[j].length);
        pswd +=  user_selected_types_of_characters[j][index];
        count = count -1;
      }else{
        break;
      }
    } 
  }
  return pswd;
}

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  if(length_password != ""){
    passwordText.value = generatePassword();
  }
}

// Reset user_selected_types_of_characters array to empty array 
function reset_user_selected_types_of_characters() {
  user_selected_types_of_characters = [];
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);