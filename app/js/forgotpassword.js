var x = document.getElementById("emailRecoverPW");
let inputMail = document.getElementById('emailRecoverPW');


function recoverPasswordFunction() {
    
    if (x.value.length == 0) {
        document.getElementById('error-input-emailrecoverPW').style.display = 'unset';
        document.getElementById('error-text').style.visibility = 'unset';
        document.getElementById('error-text').style.display = 'block';
        document.getElementById('emailRecoverPW').style.borderColor = 'rgb(229, 37, 98, .5)';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('help-text').style.marginTop = '-15px';
        document.getElementById('error-text').style.marginTop = '-20px';
        document.getElementById('error-text').style.marginBottom = '40px';

        inputMail.classList.add('your-class');
        return false;
    } else {
        document.getElementById('error-input-emailrecoverPW').style.display = 'none';
        document.getElementById('correct-input-emailrecoverPW').style.display = 'unset';
        document.getElementById('error-text').style.visibility = 'unset';
        document.getElementById('error-text').style.display = 'none';
        document.getElementById('emailRecoverPW').style.borderColor = 'rgb(64, 130, 99, .5)';
        document.getElementById('correct-text').style.visibility = 'unset';
        document.getElementById('correct-text').style.display = 'block';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('help-text').style.marginTop = '-15px';
        document.getElementById('correct-text').style.marginTop = '-20px';
        document.getElementById('correct-text').style.marginBottom = '40px';
        return true;
    }

}


inputMail.oninput = handleInput;
inputPassword.oninput = handleInput;

function handleInput() {
    if (x.value.length > 0) {
        document.getElementById('passwordButton').style.color = '#fff';
        document.getElementById('passwordButton').style.backgroundColor = '#928FDF';
        document.getElementById('error-text').style.display = 'block';
        document.getElementById('error-text').style.visibility = 'hidden';
        document.getElementById('help-text').style.marginTop = '-15px';
        document.getElementById('error-text').style.marginTop = '-20px';
        document.getElementById('error-text').style.marginBottom = '40px';
    } else {
        document.getElementById('passwordButton').style.color = '#928FDF';
        document.getElementById('passwordButton').style.backgroundColor = '#fff';
        document.getElementById('error-text').style.display = 'none';
        document.getElementById('error-text').style.visibility = 'unset';
    }
}