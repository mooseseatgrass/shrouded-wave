//Validate Phone Number

//get phone number input from html
const form = document.getElementById('form');
const phoneNumber = document.getElementById('phonenumber');

//listens for form to be submitted & prevents default reload. may not be needed depending on whether we use <form> in html
form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
});

//get phone number input
function checkInputs() {
    const phoneNumberValue = phoneNumber.value.trim();

    //if user does not enter phone number (field is blank), display error
    if(phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    } else if (!isPhoneNumber(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Phone number is not valid');
    } else {
        setSuccessFor(phoneNumber, 'number');
    }
        //add success class
        setSuccessFor(phoneNumber, 'number');
    }

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isPhoneNumber(phoneNumber) {
    //this regex will validate [1]-[123]-[123]-[1234] with or without dashes, & with or without first digit
    return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]\d{4}$/.test(phoneNumber);
}
