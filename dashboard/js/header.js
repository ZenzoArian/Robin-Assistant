let addPatientSwitch = false;

function addPatientClick() {
    let addPatient = document.getElementById('add-patient');
    addPatientSwitch = !addPatientSwitch;
    if (addPatientSwitch) {
        addPatient.classList.add('add-patient-active');
    } else {
        addPatient.classList.remove('add-patient-active');
    }
}