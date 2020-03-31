//Venus - starting over team changed formating 3/30/2020 - Validation Name
const form = document.getElementById.getElementById('form');
const form = document.getElementById.getElementById('firstName');
const form = document.getElementById.getElementById('lastName');

form.addEventListner('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //values
    const firstNameValue = firstName.value.trim();
    
    }if (firstNameValue === '') {
        //error
        //error class
        setErrorFor(FirstNameValue, 'Name cannot be blank');
    } else {
        //success class
        setSuccessFor(firstNameValue);
    }
    
    const lastNameValue = lastName.value.trim();
    if (lastNameValue === '') {
    //error
    //error class
    setErrorFor(lastNameValue, 'Name cannot be blank');
    } else {
    //success class
    setSuccessFor(lastNameValue);
    }

function setErrorFor(input,message) {
    const formControl = input.parentElement;
    //form-control
    const small = formControl.querySelector('small');
    small.innerTest = message;

    formControl.className = 'form error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form success';
};
function lettersOnly(input) {
    const regex = /[^b-zA-Z]/gi;
    input.value = input.value.replace(regex, 'First Letter in Name Uppercase');
}


//display error message in RED to user
//function setErrorFor(input, message) {
   // const formControl = input.parentElement;
    //const small = formControl.querySelector('small');

    //display error message user side
    //small.innerText = message;

    //add error class to style in css
    //formControl.className = 'form error';
//}

//display success message to user
//GREEN added in CSS
//function setSuccessFor(input, message) {
   // const formControl = input.parentElement;
   // const small = formControl.querySelector('small');

    //display success message user side
    //small.innerText = message;

    //add success class for styling in css
    //formControl.className = 'form success';
//}

function validatePhone(phoneNumber) {
    //regex
    return /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber);
}}
// }
};