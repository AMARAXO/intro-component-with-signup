const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

function handleInputFocus(input, errorElement) {
  input.addEventListener('input', () => {
    input.classList.remove('error');
    errorElement.classList.remove('Err');
    if (input.value.trim() === '' && !input.classList.contains('error')) {
      if (input === email) {
        input.placeholder = 'example@gmail.com';
      } else if (input === password) {
        input.placeholder = 'Password';
      }
    }
  });
}

handleInputFocus(firstName, document.querySelector('#firstErr'));
handleInputFocus(lastName, document.querySelector('#lastErr'));
handleInputFocus(email, document.querySelector('#emailErr'));
handleInputFocus(password, document.querySelector('#PWErr'));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    document.querySelector('#firstErr').classList.add('Err');
  } else {
    firstName.classList.remove('error');
    document.querySelector('#firstErr').classList.remove('Err');
  }

  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    document.querySelector('#lastErr').classList.add('Err');
  } else {
    lastName.classList.remove('error');
    document.querySelector('#lastErr').classList.remove('Err');
  }

  // Check email
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    document.querySelector('#emailErr').classList.add('Err');
    email.placeholder = 'example@gmail.com';
  } else {
    email.classList.remove('error');
    document.querySelector('#emailErr').classList.remove('Err');
    email.placeholder = 'Email';
  }

  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    document.querySelector('#PWErr').classList.add('Err');
    password.placeholder = 'Password'; // Update placeholder
  } else {
    password.classList.remove('error');
    document.querySelector('#PWErr').classList.remove('Err');
    password.placeholder = 'Password'; // Restore original placeholder
  }
});

// Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Function to handle visibility of last name error
function toggleVisibility() {
  const lastNameEr = document.getElementById('lastErr');
  if (lastName.value.trim() === '') {
    lastNameEr.classList.add('Err');
  } else {
    lastNameEr.classList.remove('Err');
  }
}

// Apply toggleVisibility function to button click event
button.addEventListener('click', toggleVisibility);

// Toggle eye for password
const eyeIcon = document.getElementById('eyeicon');

eyeIcon.addEventListener('click', function () {
  if (password.type === 'password') {
    password.type = 'text';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  } else {
    password.type = 'password';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  }
});
