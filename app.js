const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    document.querySelector('#firstErr').classList.add('Err')
  } else {
    firstName.classList.remove('error');
    document.querySelector('#firstErr').classList.remove('Err')
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    document.querySelector('#lastErr').classList.add('Err')
  } else {
    lastName.classList.remove('error');
    document.querySelector('#lastErr').classList.remove('Err')
  }
  

  
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    document.querySelector('#emailErr').classList.add('Err')
  } else {
    email.classList.remove('error');
    document.querySelector('#firstErr').classList.remove('Err')
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    document.querySelector('#PWErr').classList.add('Err')
  } else {
    password.classList.remove('error');
    document.querySelector('#PWErr').classList.remove('Err')
  }
});
let eyeIcon = document.getElementById("eyeicon")
let passwords = document.getElementById("password")

eyeIcon.addEventListener("click", function(){
  if (passwords.type === "password"){
    passwords.type = "text";
    eyeIcon.src ="./images/open eye.png";

  }else{
    passwords.type = "password";
    eyeIcon.src ="./images/closed eye.png"
  }
})

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

 function toggleVisibility() {
    const lastNameEr = getElementById("lastNameError");
    if (lName == '') {
      lastNameEr.style.visibility = "visible";
    }else{
      lastNameEr.style.visibility = "hidden";
    }
  }
  button = getElementById("button");
  button.addEventListener("click", toggleVisibility);


  