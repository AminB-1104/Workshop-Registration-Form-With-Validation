function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let regexName = /^[a-zA-Z\s]{2,}/;
    let regexEmail = /^[a-zA-Z0-9_\-\.]+@+[a-z]+.+[a-z]{2,}/;
    let regexPhone = /^(\+92|0)[0-9]{10}/;

    if (fname.match(regexName) && lname.match(regexName) && email.match(regexEmail) && phone.match(regexPhone)) {                           //checks all validations at once
        alert("Registration Completed");
    } else {
        alert("Invalid Form");
    }
}