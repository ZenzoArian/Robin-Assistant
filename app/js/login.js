var x = document.forms["loginForm"]["emailLogin"].value;
var y = document.forms["loginForm"]["passwordLogin"].value;

function loginFunction() {

    if (x == "" && y == "") {
        document.getElementById('error-input-email').style.display = 'unset';
        document.getElementById('error-input-password').style.display = 'unset';
        document.getElementById('emailLogin').style.marginBottom = '-4px';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('error-text').style.visibility = 'unset';
        return false;
    }
    else if (x == "") {
        document.getElementById('error-input-email').style.display = 'unset';
        document.getElementById('input--div').style.marginTop = '-18px';
        document.getElementById('error-text').style.visibility = 'unset';
        return false;
    }
    else if (y == "") {
        document.getElementById('error-input-password').style.display = 'unset';
        document.getElementById('emailLogin').style.marginBottom = '-4px';
        document.getElementById('error-text').style.visibility = 'unset';
        return false;
    } else {
        return true
    }

}

if (x == "" && y == "") {
    
} else {
    document.getElementById('error-input-email').style.display = 'unset';
}