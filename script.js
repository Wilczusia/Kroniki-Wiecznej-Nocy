function checkPassword() {
    const input = document.getElementById("password").value;
    const secretContent = document.getElementById("secret-content");
    const correctPassword = "sha'rathra";

    if (input === correctPassword) {
        secretContent.classList.remove("hidden");
    } else {
        alert("Niepoprawne hasło! Spróbuj ponownie.");
    }
}
