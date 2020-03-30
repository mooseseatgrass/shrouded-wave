/*// Validate first / last name / nothings red but can not tell if works//;

      //Input fields
    const firstName = document.getElementById("firstName").value;

    const lastName = document.getElementById("lastName").value;

    const error_message = document.getElementById("error_message");
    
      //Form
    const form = document.getElementById("form");

      //Validation Colors (names)~would like to use for client side validation //
      //const green = "green";
      //const red = "red";
    
    form.addEventListener("submit"), function(event){
          //prevent defauts
        event.preventDefault();
        if(
            validateFirstName() && 
            validateLastName()
        )
        const name =firstName.value;
        const container = document.querySelector("div.container");
        
    }
            //Validators
        function validateFirstName(){
          //check if empty//
        if(checkIfEmpty(firstName)) return;
          //check if only letters//
        if(!checkIfOnlyLetters(firstName)) return;
          //if only has letters
        return true;
        } 
        function validateLastName(){
            //check if empty//
            if(checkIfEmpty(lastName)) return;
            //check if only letters//
            if(!checkIfOnlyLetters(lastName)) return;
            //if only has letters
            return true;  
        }
            //Utility Functions - used across multiple components 
          //field invalid////else field valid//
        function checkIfEmpty(field){
        if(isEmpty(field.value.trim())) {
              //set invalid 
        setInvalid(field, `${field.name} can not be empty`);
        return true;  
          //set valid
        } else {
            setValid(field);
            return false;
        }
    }
        function isEmpty(value){
            if(value === '') return true;
            return false;
        }
        
        function setInvalid(field, message) {
            field.className = 'invalid';
            field.nextElementSibling.innerHTML = message;
       // field.nextElementSibling.style.color = red; 
    }
        function setValid(field) {
            field.className = 'valid';
            field.nextElementSibling.innerHTML = '';
       // field.nextElementSibling.style.color = green; //
    }

    function checkIfOnlyLettersNoSymbols(field) {
        if(/^[a-zA-Z ]+$/.test(field.value)){
            setValid(field);
            return true;

        } else {
            setInvalid(field, `${field.name} only letters no symbols`);
            return false;
        }

    }function lengthOfFirstName(field) {
        if(firstname.length < 2) {
        text = "Please Enter Valid First Name";
        error_message.innerHTML = text;
        return false;  
    }

    function lengthOfLastName(field) {
        if(lastname.length < 2) {
        text = "Please Enter Valid Last Name";
        error_message.innerHTML = text;
        return false;
    }  

    }
//------------------------------*/

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
    if(phoneNumberValue === '' ) {
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    } else if (phoneNumberValue.length != 10){
        setErrorFor(phoneNumber, 'Phone number must contain at least 10 digits');
    } if (!isPhoneNumber(phoneNumberValue)){
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