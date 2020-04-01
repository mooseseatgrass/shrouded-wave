//Get form input from user/html
const form = document.getElementById('form');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const phoneNumber = document.getElementById('phonenumber');

//Listen for Button to be submitted
form.addEventListener('submit' , (e) => {
    e.preventDefault();
       
    //Validate field input
    checkInputs();

});

//checkInputs function
function checkInputs() {

    //trim spaces off front & end of input
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();

    //this is something i'm playing with to make it so all fields must be filled out in order to submit the form.
    //require all fields to be filled out
    // if(fNameValue == "" || lNameValue == "" || phoneNumberValue == "") {
    //   setErrorFor(form, 'Please fill out all fields.')
    // } else {
    //   setSuccessFor(form, '');
    // }

    //First Name Validation
    if(fNameValue === "") {
        setErrorFor(fName, 'First name cannot be blank');
    } else if (fNameValue.length > 70) {
        setErrorFor(fName, 'Must be fewer than 70 characters');
    } else if (!onlyLetters(fNameValue)) {
        setErrorFor(fName, 'First name must contain only letters');
    } else if (onlyLetters(fNameValue)) {
        setSuccessFor(fName);
        let f = fNameValue.toLowerCase();
        console.log(typeof(f), f);
        form.reset();
    }

    //Last Name Validation
    if(lNameValue === "") {
        setErrorFor(lName, 'Last name cannot be blank');
    } else if (lNameValue.length > 70) {
        setErrorFor(lName, 'Must be fewer than 70 characters');
    } else if (!onlyLetters(lNameValue)) {
        setErrorFor(lName, 'Last name must contain only letters');
    } else if (onlyLetters(lNameValue)) {
        setSuccessFor(lName);
        let l = lNameValue.toLowerCase();
        console.log(typeof(l), l);
        form.reset();
    }


    //Phone # Validation Errors & Success
    if(phoneNumberValue === "") {
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    } else if (!validatePhone(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Phone number is not valid');
        console.log(phoneNumberValue + " not valid");
    } else if (validatePhone(phoneNumberValue)) {
        setSuccessFor(phoneNumber);
        console.log(typeof(phoneNumberValue), phoneNumberValue);
        form.reset();
    }

//display error message in RED, icon to user
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //display error message user side
    small.innerText = message;

    //add error class to style message in css
    formControl.className = 'form error';
}

//display success icon to user
//GREEN added in CSS
function setSuccessFor(input) {
    const formControl = input.parentElement;

    //add success class for styling in css
    formControl.className = 'form success';
}

//name can only contain letters, no other characters regex
function onlyLetters(x) {
  return /^[a-zA-Z]+$/.test(x);
  };

//phone number formatting regex. accepts a wide variety
function validatePhone(phoneNumber) {
    return /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber);
}};

