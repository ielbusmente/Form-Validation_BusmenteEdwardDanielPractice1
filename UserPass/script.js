pass.addEventListener('keyup', function () {
    var passw = document.getElementById('pass');
    var status = document.getElementById('stat');
    var cou = 0;

    if (passw.value == "") {
        passw.style.background = "red";
    }
    else  {
        passw.style.background = "rgb(255, 129, 129)";
    }
})
                   

