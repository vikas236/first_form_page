// calling elements

const input = document.querySelectorAll('input');
const password = document.querySelector('#password');
const password_confirm = document.querySelector('#password_confirm')
const test = document.querySelector('.test')
let pass = "";
let pass_c = "";


// declaring functions

function validation() {
    if (this.validity.valid) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
}

function pass_val() {
    if (pass == pass_c) {
        test.classList.add("inactive");
        if ((password.classList.contains("invalid") || password_confirm.classList.contains("invalid")) && password.validity.valid) {
            password.classList.remove("invalid", "valid");
            password_confirm.classList.remove("invalid", "valid");
            password.classList.add("valid");
            password_confirm.classList.add("valid");
        }
    }
    else {
        test.classList.remove("inactive");
        if (password.classList.contains("valid") || password_confirm.classList.contains("valid")) {
            password.classList.remove("valid", "invalid");
            password_confirm.classList.remove("valid", "invalid");
            password.classList.add("invalid");
            password_confirm.classList.add("invalid");
        }
    }
}


// events

for (i = 0; i < input.length; i++) {
    // input[i].addEventListener('focus', validation);
    input[i].addEventListener('blur', validation);
}

password.addEventListener('blur', function () {
    pass = password.value;
    pass_val();
});
password_confirm.addEventListener('blur', function () {
    pass_c = password_confirm.value;
    pass_val(); 
});