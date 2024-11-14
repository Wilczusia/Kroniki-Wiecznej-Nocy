function checkPassword() {
    const correctPassword = "sha'rathra"; // Ustaw swoje hasło tutaj
    const enteredPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        window.location.href = "book.html"; // Przekierowanie do strony księgi
    } else {
        errorMessage.style.display = "block"; // Wyświetl komunikat o błędzie
    }
}
