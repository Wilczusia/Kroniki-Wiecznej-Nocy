function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "𐎘𐎧𐎀𐎩𐎗𐎀𐎚𐎧𐎗𐎌";  // Hasło zapisane w starożytnym języku
    var errorMessage = document.getElementById("error-message");
    var bookLink = document.getElementById("book-link");

    if (password === correctPassword) {
        // Jeśli hasło jest poprawne, pokazujemy link do księgi
        bookLink.style.display = "inline";
        errorMessage.style.display = "none";  // Ukryj komunikat o błędzie
    } else {
        // Jeśli hasło jest niepoprawne, pokazujemy komunikat o błędzie
        bookLink.style.display = "none";  // Ukryj link do księgi
        errorMessage.style.display = "inline";
    }
}
