 //for email is exists or not
 async function checkemail(email)
 {
    var email=document.getElementById("emailid").value;
    const signuup = document.getElementById('signup');
     console.log(email);
     const response  = await fetch(`/checkemail/?email=${email}`);
      const result = await response.json()
      console.log(result);
      var ans = result.status;
     console.log(ans);
     
     if(ans == true)
     {
       document.getElementById('demo').innerHTML = "user Already exists";
      
     }
     else
     {
        document.getElementById('demo').innerHTML = "user doesn't exists";
     }
  
}
 //for email is exists or not
 async function checkemail(email)
 {
    var email=document.getElementById("emailid").value;
    const signuup = document.getElementById('signup');
     console.log(email);
     const response  = await fetch(`/checkemail/?email=${email}`);
      const result = await response.json()
      console.log(result);
      var ans = result.status;
     console.log(ans);
     
     if(ans == true)
     {
       document.getElementById('demo').innerHTML = "user Already exists";
      
     }
     else
     {
       // document.getElementById('demo').innerHTML = "user doesn't exists";
     }
  
}
 //for password validation
//  async function checkpass(password)
//  {
//     var password =document.getElementById("passid").value;
//       const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//       return regex.test(password);
//       console.log(password);
//       const response  = await fetch(`/checkpass/?password = ${password}`);
//       const result = await response.json()
//       console.log(result);

// // When the user clicks on the password field, show the message box
// password.onfocus = function() {
// document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// password.onblur = function() {
//  document.getElementById("message").style.display = "none";
// }




//      // var ans = result.status;
//      //console.log(ans);
     
//     //  if(ans == true)
//     //  {
//     //    document.getElementById('demopass').innerHTML = "Password is invalid ";
      
//     //  }
//     //  else
//     //  {
//     //     document.getElementById('demopass').innerHTML = "Password is valid";
//     //  }
  
// }

// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$


// ^ - The start of the string.
// (?=.*[a-z]) - Lookahead assertion to ensure that the password contains at least one lowercase letter.
// (?=.*[A-Z]) - Lookahead assertion to ensure that the password contains at least one uppercase letter.
// (?=.*\d) - Lookahead assertion to ensure that the password contains at least one digit.
// (?=.*[@$!%*?&]) - Lookahead assertion to ensure that the password contains at least one special character from the set [@$!%*?&].
// [A-Za-z\d@$!%*?&]{8,} - The actual password pattern, which requires the password to be at least 8 characters long and can contain any combination of uppercase and lowercase letters, digits, and the special characters @, $, !, %, *, ?, and &.
// $ - The end of the string.
// This pattern will ensure that a password contains a combination of upper and lowercase letters, digits, and special characters and is at least 8 characters long.



var myInput = document.getElementById("passid");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}