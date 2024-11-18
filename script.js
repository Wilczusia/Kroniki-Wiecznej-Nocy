document.getElementById("submit-btn").addEventListener("click", function() {
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "𐎘𐎧𐎀𐎩𐎗𐎀𐎚𐎧𐎗𐎌"; // Twoje hasło

    if (passwordInput === correctPassword) {
        // Ukrycie formularza logowania
        document.querySelector(".login-container").style.display = "none";

        // Ujawnienie zawartości książki
        document.getElementById("book").style.display = "block";
    } else {
        alert("Niepoprawne hasło!");
    }
});
