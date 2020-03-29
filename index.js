//Validate Phone Number

//Get info from html
const form = document.getElementById('form');
const phoneNumber = document.getElementById('phonenumber');
const submit = document.getElementById('submit');

//Button Event Listener Function
form.addEventListener('submit' , (e) => {
    e.preventDefault();

    //clear form after submission
    form.reset();
   
    //Validate input
    checkInputs();
});

//Check phone number input
function checkInputs() {
    const phoneNumberValue = phoneNumber.value.trim();

    //Input Errors
    if(phoneNumberValue === '') {
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    } else if (!isPhoneNumber(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Phone number is not valid');
    } else {
        setSuccessFor(phoneNumber);
    }

    //display error message to user
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //display error message user side
    small.innerText = message;

    //add error class
    formControl.className = 'form error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form success';
}

function isPhoneNumber(phoneNumber) {
    //this regex will validate [1]-[123]-[123]-[1234] with or without dashes, & with or without first digit
    return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]\d{4}$/.test(phoneNumber);
}};
