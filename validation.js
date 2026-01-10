function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Clear previous messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        valid = false;
    }

    // Phone validation
    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter valid 10-digit phone number";
        valid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message cannot be empty";
        valid = false;
    }

    // Success
    if (valid) {
        document.getElementById("successMsg").innerHTML =
            "Thank you! Your message has been sent.";
    }

    return valid;
}
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let batch = document.getElementById("batch").value;

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("batchError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name required";
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "Invalid phone number";
        valid = false;
    }

    if (batch === "") {
        document.getElementById("batchError").innerHTML = "Select a batch";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").innerHTML =
            "Registration Successful! Payment received via Google Pay.";
    }

    return false; // prevent actual submission (demo)
}
