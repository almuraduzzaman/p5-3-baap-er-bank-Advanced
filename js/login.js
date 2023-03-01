document.getElementById("btn-submit").addEventListener('click', function () {
    const emailInputField = document.getElementById("user-email").value;
    const passwordInputField = document.getElementById("user-password").value;

    if (emailInputField === "al@murad.com" && passwordInputField === 'sontan&baap') {
        window.location.href = "bank.html";
    } else {
        alert("Incorrect Email or Password!");
    }

})