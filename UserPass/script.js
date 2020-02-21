function passValidation() { 
    var red = "rgb(255, 130, 130)";
    var green = "rgb(142, 255, 151)";
    var pass = document.getElementById('pass');
    var confPass = document.getElementById('confPass');
    var status = document.getElementById('stat');
    var cou = 0;

    if (pass.value == "" ) {
        pass.style.background = red;
    }
    if (confPass.value == "" ) {
        confPass.style.background = red;
    } 
    if (pass.value != confPass.value) {
        pass.style.background = red;
        confPass.style.background = red;  
    } 
    

}

function submitValidation() {
    var 
    return false;
}