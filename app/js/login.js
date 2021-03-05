var x = document.getElementById("emailLogin");
var y = document.getElementById("passwordLogin");
let inputMail = document.getElementById('emailLogin');
let inputPassword = document.getElementById('passwordLogin');

function loginFunction() {

    if (x.value.length == 0 && y.value.length == 0) {
        document.getElementById('error-input-email').style.display = 'unset';
        document.getElementById('error-input-password').style.display = 'unset';
        document.getElementById('emailLogin').style.marginBottom = '-4px';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('error-text').style.visibility = 'unset';
        document.getElementById('emailLogin').style.borderColor = 'rgb(229, 37, 98, .5)';
        document.getElementById('passwordLogin').style.borderColor = 'rgb(229, 37, 98, .5)';
        inputMail.classList.add('your-class');
        inputPassword.classList.add('your-class');
        return false;
    }
    else if (x.value.length == 0) {
        document.getElementById('error-input-email').style.display = 'unset';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('error-text').style.visibility = 'unset';
        document.getElementById('emailLogin').style.borderColor = 'rgb(229, 37, 98, .5)';
        inputMail.classList.add('your-class');
        return false;
    }
    else if (y.value.length == 0) {
        document.getElementById('error-input-password').style.display = 'unset';
        document.getElementById('emailLogin').style.marginBottom = '-4px';
        document.getElementById('error-text').style.visibility = 'unset';
        document.getElementById('passwordLogin').style.borderColor = 'rgb(229, 37, 98, .5)';
        inputPassword.classList.add('your-class');
        return false;
    } else {
        return true;
    }

}

inputMail.oninput = handleInput;
inputPassword.oninput = handleInput;

function handleInput() {
    if (x.value.length > 0 && y.value.length > 0) {
        document.getElementById('loginButton').style.color = '#fff';
        document.getElementById('loginButton').style.backgroundColor = '#928FDF';
    } else {
        document.getElementById('loginButton').style.color = '#928FDF';
        document.getElementById('loginButton').style.backgroundColor = '#fff';
    }
}