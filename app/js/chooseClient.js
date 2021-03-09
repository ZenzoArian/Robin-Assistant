syncButton = document.getElementById('syncButton');
syncButton.disabled = true;
clientName1 = document.getElementById('clientName1');
clientName2 = document.getElementById('clientName2');
clientName3 = document.getElementById('clientName3');
clientName4 = document.getElementById('clientName4');
clientName5 = document.getElementById('clientName5');
checkbox1 = document.getElementById('checkbox1');
checkbox2 = document.getElementById('checkbox2');
checkbox3 = document.getElementById('checkbox3');
checkbox4 = document.getElementById('checkbox4');
checkbox5 = document.getElementById('checkbox5');

function handleInputCheckbox() {
    if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked || checkbox5.checked) {
        syncButton.style.color = '#fff';
        syncButton.style.backgroundColor = '#928FDF';
        syncButton.disabled = false;
    } else {
        syncButton.style.color = '#928FDF';
        syncButton.style.backgroundColor = '#fff';
        syncButton.disabled = true;
    }

    if (checkbox1.checked) {
        clientName1.style.color = "#928FDF";
    } else {
        clientName1.style.color = "#1A1818";
    }
    
    if (checkbox2.checked) {
        clientName2.style.color = "#928FDF";
    } else {
        clientName2.style.color = "#1A1818";
    }
    
    if (checkbox3.checked) {
        clientName3.style.color = "#928FDF";
    } else {
        clientName3.style.color = "#1A1818";
    }
    
    if (checkbox4.checked) {
        clientName4.style.color = "#928FDF";
    } else {
        clientName4.style.color = "#1A1818";
    }
    
    if (checkbox5.checked) {
        clientName5.style.color = "#928FDF";
    } else {
        clientName5.style.color = "#1A1818";
    }
}

function ckChange(ckType){
    var ckName = document.getElementsByName(ckType.name);
    var checked = document.getElementById(ckType.id);

    if (checked.checked) {
      for(var i=0; i < ckName.length; i++){

          if(!ckName[i].checked){
              ckName[i].disabled = true;
          }else{
              ckName[i].disabled = false;
          }
      } 
    }
    else {
      for(var i=0; i < ckName.length; i++){
        ckName[i].disabled = false;
      } 
    }    
}