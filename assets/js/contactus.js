function formSubmit(e, form) {
    e.preventDefault();

    // Get button & status element
    const submitBtn = document.getElementById("s-button");
    const statusMsg = document.getElementById("form-status");

    // Set initial state
    submitBtn.innerText = "Submitting...";
    statusMsg.innerText = ""; // clear previous msg

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbyD6lJaFCCvMQQcOIMDMAPLq8ZkFngvqaTsN4w35JxX7s-KlpNz4UEKnASyGkb4gLPF/exec", {
        method: "POST",
        body: formData
    })
    .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        statusMsg.innerText = "Form submitted successfully!";
        statusMsg.style.color = "green";
        submitBtn.innerText = "Submit";
        form.reset();
    })
    .catch((err) => {
        console.error("Error:", err);
        statusMsg.innerText = "Something went wrong, try again!";
        statusMsg.style.color = "red";
        submitBtn.innerText = "Submit";
    });
}

function checkNum(e) {
    const key = e.key;
    return /^[0-9]$/.test(key) || key === "Backspace" || key === "Tab" || key=="Home" || key=="End" || key=="Delete";
}

function checkAlpha(e) {
    const key = e.key;
    console.log(key);
    return /^[a-zA-Z]$/.test(key) || key === "Backspace" || key === "Tab" || key=="Home" || key=="End" || key=="Delete" || key==" ";
}

function validatePincode(pincode) {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pincode);
}
