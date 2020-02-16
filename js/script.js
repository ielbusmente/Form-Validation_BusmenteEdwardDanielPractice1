// var events = document.getElementById('events').value;
// var eventT = document.getElementById('EventTitle').value;
var sDate = document.getElementById('EventDate').value;
var eDate = document.getElementById('to').value;
var pDate = document.getElementById('PostingDate').value;



function validate(){
 
    // if (events === "") {
    //     alert("An Event Type must be chosen.");
    //     return false;
    // }
    // else if (eventT === "") {
    //     alert("Please fill up Event Title.");
    //     return false;
    // }  
    // else 
    if (sDate > eDate) {
        alert("Starting date must be before the finishing date.");
        return false;
    } 
    else if (pDate > sDate) {
        alert("Posting date must not be after the event date.");
        return false;
    } 
    else alert("Event was created. Thank you.");
}