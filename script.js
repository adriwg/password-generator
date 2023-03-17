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


// Array holds the characters which the user wants to include in the password
var user_selected_types_of_characters = [];

// Function to prompt user for password options
function getPasswordOptions() {
  var length_password = prompt("Please enter the length of the password you would like to generate:");
  if(length_password <8 || length_password >128){
    // if length_password  is less than 8 or greater than 128
    alert("Password must have at least 8 characters and no more than 128 characters.");
  }else {
    //Prompt the user if they want the password to include lowercase characters
    var includes_lowercase_characters = confirm("Do you want the password to include lowercase characters?");
    if(includes_lowercase_characters){
      // if the user's response is true
      user_selected_types_of_characters = user_selected_types_of_characters.concat(lowerCasedCharacters);
      console.log("user_selected_types_of_characters:",user_selected_types_of_characters);
    }else{
      console.log("false");
    }
    //Prompt the user if they want the password to include lowercase characters
    var includes_uppercase_characters = confirm("Do you want the password to include uppercase characters?");
    // if the user's response is true
    if(includes_uppercase_characters){
      user_selected_types_of_characters = user_selected_types_of_characters.concat(upperCasedCharacters);
      console.log("user_selected_types_of_characters:",user_selected_types_of_characters);
    }
     //Prompt the user if they want the password to include numeric characters
     var includes_numeric_characters = confirm("Do you want the password to include numeric characters?");
     // if the user's response is true
     if(includes_numeric_characters){
       user_selected_types_of_characters = user_selected_types_of_characters.concat(numericCharacters);
       console.log("user_selected_types_of_characters:",user_selected_types_of_characters);
     }
     //Prompt the user if they want the password to include special characters
     var includes_special_characters = confirm("Do you want the password to include special characters?");
     // if the user's response is true
     if(includes_special_characters){
       user_selected_types_of_characters = user_selected_types_of_characters.concat(specialCharacters);
       getRandom(user_selected_types_of_characters);
       console.log("user_selected_types_of_characters:",user_selected_types_of_characters);
     }else{
      // if user do not choose any type of character, then prompt the user to choose either continues to generate a password with special characters or start again the process
      if(!includes_lowercase_characters && !includes_uppercase_characters && !includes_numeric_characters){
        console.log("includes_special_characters is false");
        var confirm_continue = confirm("Password must have at least one character type. Continues to generate a password or start again?");
        if(confirm_continue){
          user_selected_types_of_characters = user_selected_types_of_characters.concat(specialCharacters);
          getRandom(user_selected_types_of_characters);
        }else{
          reset_user_selected_types_of_characters();
        }
        
       }
     }
     
    
  }


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
/*   var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password; */
}

// Reset user_selected_types_of_characters array to empty array 
function reset_user_selected_types_of_characters() {
  user_selected_types_of_characters = [];
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);