var x = document.getElementById("emailRecoverPW");
let inputMail = document.getElementById('emailRecoverPW');
let errorText = document.getElementById('error-text');
let correctText = document.getElementById('correct-text');
let passwordButton = document.getElementById('passwordButton');

function recoverPasswordFunction() {
    
    if (x.value.length == 0) {
        document.getElementById('error-input-emailrecoverPW').style.display = 'unset';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('help-text').style.marginTop = '-15px';
        errorText.style.visibility = 'unset';
        errorText.style.display = 'block';
        inputMail.style.borderColor = 'rgb(229, 37, 98, .5)';
        errorText.style.marginTop = '-20px';
        errorText.style.marginBottom = '40px';
        inputMail.classList.add('your-class');
        return false;
    } else {
        document.getElementById('error-input-emailrecoverPW').style.display = 'none';
        document.getElementById('correct-input-emailrecoverPW').style.display = 'unset';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('help-text').style.marginTop = '-15px';
        errorText.style.visibility = 'unset';
        errorText.style.display = 'none';
        inputMail.style.borderColor = 'rgb(64, 130, 99, .5)';
        correctText.style.visibility = 'unset';
        correctText.style.display = 'block';
        correctText.style.marginTop = '-20px';
        correctText.style.marginBottom = '40px';
        return true;
    }

}


inputMail.oninput = handleInput;

function handleInput() {
    if (x.value.length > 0) {
        document.getElementById('help-text').style.marginTop = '-15px';
        passwordButton.style.color = '#fff';
        passwordButton.style.backgroundColor = '#928FDF';
        errorText.style.display = 'block';
        errorText.style.visibility = 'hidden';
        errorText.style.marginTop = '-20px';
        errorText.style.marginBottom = '40px';
    } else {
        document.getElementById('help-text').style.marginTop = '40px';
        passwordButton.style.color = '#928FDF';
        passwordButton.style.backgroundColor = '#fff';
        errorText.style.display = 'none';
        errorText.style.visibility = 'unset';
    }
}