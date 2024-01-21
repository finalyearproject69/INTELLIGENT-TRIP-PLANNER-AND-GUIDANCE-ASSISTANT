const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


//validated JS for data entry
function validateSignUp() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || phone.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill in all fields');
        return false;
    }

    if (!isPhoneNumberValid(phone)) {
        alert('Phone must be a 10-digit integer');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    return true;
}

function isPhoneNumberValid(phone) {
    return /^\d{10}$/.test(phone);
}


function validateSignIn() {
    var signInEmail = document.getElementById('signInEmail').value;
    var signInPassword = document.getElementById('signInPassword').value;

    if (signInEmail.trim() === '' || signInPassword.trim() === '') {
        alert('Please fill in all fields');
        return false;
    }

    return true;
}

function toggleForm(formId) {
    var signUpForm = document.getElementById('signUpForm');
    var signInForm = document.getElementById('signInForm');

    if (formId === 'signUpForm') {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
    } else if (formId === 'signInForm') {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    }
}