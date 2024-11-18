document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submit-btn");
    const passwordInput = document.getElementById("password");
    const bookContent = document.getElementById("book");

    const correctPassword = "𐎘𐎧𐎀𐎩𐎗𐎀𐎚𐎧𐎗𐎌"; // Twoje hasło

    submitBtn.addEventListener("click", function() {
        const userPassword = passwordInput.value;
        if (userPassword === correctPassword) {
            document.querySelector(".login-container").style.display = "none";
            bookContent.style.display = "block";
        } else {
            alert("Niepoprawne hasło!");
        }
    });
});
