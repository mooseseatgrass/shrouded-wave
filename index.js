//Venus
// Validate first / last name / nothings red but can not tell if works//;

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
//Lexie
//Validate Phone Number

//Get info from html
const form = document.getElementById('form');
const phoneNumber = document.getElementById('phonenumber');

//Button Event Listener Function
form.addEventListener('submit' , (e) => {
    e.preventDefault();

    //clear form after submission
    // form.reset();
       
    //Validate input
    checkInputs();
 
});

//Check phone number input
function checkInputs() {
    const phoneNumberValue = phoneNumber.value.trim();

    //Input Errors
    if(phoneNumberValue == "") {
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    } else if (!validatePhone(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Phone number is not valid');
        console.log(phoneNumberValue + " not valid");
    } else {
        document.getElementById('success').innerText = "Your phone number has been received.";
        console.log(phoneNumberValue);
        form.reset();
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

function validatePhone(phoneNumber) {
    //regex
    return /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[01-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(phoneNumber);
}};
    //old regex didn't work as expected
    ///^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]\d{4}$/.test(phoneNumber);