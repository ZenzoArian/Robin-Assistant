let saveButton = document.getElementById('profile--save-button');
function valueChanged(changedValue) {
    saveButton.classList.add('profile--save-button-active');
    if (changedValue) {updateProfile(changedValue);}
}

function removeActive() {
    saveButton.classList.remove('profile--save-button-active');
    saveButton.innerHTML = 'changes saved';
}

function updateProfile(changedValue) {
    document.getElementById(changedValue+"-preview").innerHTML = document.getElementById(changedValue).value;
  }