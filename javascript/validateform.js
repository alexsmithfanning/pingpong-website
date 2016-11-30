function validateForm() {
    var x = document.forms["contact"]["name"].value;
    var y = document.forms["contact"]["email"].value;
    var z = document.forms["contact"]["subject"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    if (z == "") {
        alert("Subject must be filled out");
        return false;
    }
}