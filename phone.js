//Lexie
//Validate Phone Number

//Get info from html
const form = document.getElementById('form');
const phoneNumber = document.getElementById('phonenumber');

//remove below
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
//remove above

//Button Event Listener Function
form.addEventListener('submit' , (e) => {
    e.preventDefault();
       
    //Validate input
    checkInputs();

});

//Check phone number input
function checkInputs() {

    //remove below adding fname & lname checks
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();

    const phoneNumberValue = phoneNumber.value.trim();

    //FName * LName Validation Errors & Success
    if(fNameValue == "") {
        setErrorFor(fName, 'First name cannot be blank');
    } else {
        setSuccessFor(fName, "Success fName");
        console.log(fNameValue);
        form.reset();
    };

    if(lNameValue == "") {
        setErrorFor(lName, 'Last name cannot be blank');
    } else {
        setSuccessFor(lName, "Success lName");
        console.log(lNameValue);
        form.reset();
    };
    //remove above

    //move const phone back here

    //Phone # Validation Errors & Success
    if(phoneNumberValue == "") {
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    } else if (!validatePhone(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Phone number is not valid');
        console.log(phoneNumberValue + " not valid");
    } else if (validatePhone(phoneNumberValue)); {
        setSuccessFor(phoneNumber, 'Success Phone!');
        console.log(phoneNumberValue);
        form.reset();
    } else {
        setErrorFor(phoneNumber, 'Unknown error. Try again.');
    }

//display error message in RED to user
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //display error message user side
    small.innerText = message;

    //add error class to style in css
    formControl.className = 'form error';
}

//display success message to user
//GREEN added in CSS
function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //display success message user side
    small.innerText = message;

    //add success class for styling in css
    formControl.className = 'form success';
}

function validatePhone(phoneNumber) {
    //regex
    return /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber);
}};