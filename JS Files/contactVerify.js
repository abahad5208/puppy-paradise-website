// Variable Definitions

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('emailID');
var comments = document.getElementById('comments');
var errors = document.getElementById('errors');
var form = document.getElementById('contactform');
var err_count;

function verifyContact() {
    errors.innerHTML = "";
    errors.style.display = "none"
    err_count = 0;

    if(fname.value == "") {
        errors.innerHTML += "Please enter your first name" + "<br>";
        fname.style.backgroundColor = "red";
        err_count++;
    } else if(fname.value.length < 2) {
        errors.innerHTML += "First name should be at least 2 characters!" + "<br>";
        fname.style.backgroundColor = "red";
        err_count++;
    } else {
        fname.style.backgroundColor = "white";
    };

    if(lname.value == "") {
        errors.innerHTML += "Please enter your last name" + "<br>";
        lname.style.backgroundColor = "red";
        err_count++;
    } else if(lname.value.length < 2) {
        errors.innerHTML += "Last name should be at least 2 characters!" + "<br>";
        lname.style.backgroundColor = "red";
        err_count++;
    } else {
        lname.style.backgroundColor = "white";
    };
    
    if(email.value == "") {
        errors.innerHTML += "Please enter a valid email ID!" + "<br>";
        email.style.backgroundColor = "red";
        err_count++;
    } else {
        email.style.backgroundColor = "white";
    };

    if(comments.value == "") {
        errors.innerHTML += "Please enter your comments/suggestions/questions!" + "<br>";
        comments.style.backgroundColor = "red";
        err_count++;
    } else {
        comments.style.backgroundColor = "white";
    };

    if(err_count > 0) {
        errors.style.display = "block";
        errors.scrollIntoView();
        return false;
    } else {
        alert("Thank you for your feedback/queries. We will get back to you shortly.");
        form.reset();
    };
};

function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8 || key == 37 || key == 39 || key == 46 || key == 9);
  };