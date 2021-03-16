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



function dropdownHeader1() {
    addPatientSwitch = !addPatientSwitch;
    if (addPatientSwitch) {
        document.getElementById("patient-container-1").style.height = "155px";
        document.getElementById("patient-container-2").style.height = "100%";
        document.getElementById("patient-container-3").style.height = "100%";
    } else {
        document.getElementById("patient-container-1").style.height = "100%";
    }
}
function dropdownHeader2() {
    addPatientSwitch = !addPatientSwitch;
    if (addPatientSwitch) {
        document.getElementById("patient-container-1").style.height = "100%";
        document.getElementById("patient-container-2").style.height = "155px";
        document.getElementById("patient-container-3").style.height = "100%";
    } else {
        document.getElementById("patient-container-2").style.height = "100%";
    }
}
function dropdownHeader3() {
    addPatientSwitch = !addPatientSwitch;
    if (addPatientSwitch) {
        document.getElementById("patient-container-1").style.height = "100%";
        document.getElementById("patient-container-2").style.height = "100%";
        document.getElementById("patient-container-3").style.height = "155px";
    } else {
        document.getElementById("patient-container-3").style.height = "100%";
    }
}