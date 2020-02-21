//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=Phone+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=

function checkNumber(){
    let phoneLis = document.getElementById("phone");
    phoneLis.addEventListener("keypress",checkPhone,false);
}

function checkPhone(evt) {
    let phoneLis = document.getElementById("phone");
    let charCodePhone = evt.charCode;
    if(charCodePhone !=0){
        if(charCodePhone !=43){
            if(charCodePhone < 48 || charCodePhone > 57){
                evt.preventDefault();
                phoneLis.style.border = "2px solid red";
            }else{
                phoneLis.style.border = "";
            }
        }
    }
}



//++++++++++++++++++++++++++++++name+++++++++++++++++++++++++++++

function checkFio () {
    let usName = document.getElementById("name");
    usName.addEventListener( "keypress", checkName, false );
}

function checkName(evt) {
    let usName = document.getElementById("name");
    let charCode = evt.charCode;
    if (charCode != 0) {
        if (charCode != 32) {
            if (charCode < 1040 || charCode > 1103) {
                evt.preventDefault();
                usName.style.border = "2px solid red";
            }else{
                usName.style.border = "";
            }
        }
    }
} 


//=========================================Проверка на пустоту+========================================================
function validateName(){
    let userName = document.getElementById("name");
    let userPhone = document.getElementById("phone");
    let userMail = document.getElementById("mail");

    if(!userName.value) {
        userName.style.border = "2px solid red";
        return false;
    }else{
        userName.style.border = "";
    }


    if(userPhone.value.length !=11) {
        userPhone.style.border = "2px solid red";
        return false;
    }else{
        userPhone.style.border = "";
    }

    let regularMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let validMail = regularMail.test(userMail.value);


    if(validMail == false) {
        userMail.style.border = "2px solid red";
        return false;
    }else{
        userMail.style.border = "";
    }

    return true;
}
