var firstName = document.querySelector('#firstName');
var firstNameError = document.querySelector('#firstNameError');
var lastName = document.querySelector('#lastName');
var lastNameError = document.querySelector('#lastNameError');
var emailRegex = /^\w+[\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4})$/i;
var emailInput = document.querySelector('#email');
var emailError = document.querySelector('#emailError');
var contactForm = document.querySelector('#button');

function validateName (name) {
    var removeSpaces = name.trim();

    if (removeSpaces.length > 1) {
        return true;
    } 
    return false;
}

function validateEmail () {
    if (emailInput.value.match(emailRegex)) {
        return true;
    }
    return false;
}

contactForm.addEventListener('click', function(event) {
    event.preventDefault();
    var firstNameValue = firstName.value;
    var firstNameValid = validateName(firstNameValue);
    var lastNameValue = lastName.value;
    var lastNameValid = validateName(lastNameValue);
    var emailValue = emailInput.value;
    var emailValid = validateEmail(emailValue);

    if (firstNameValid) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (lastNameValid) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (emailValid) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
});