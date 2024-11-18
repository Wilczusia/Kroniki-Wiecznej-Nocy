document.getElementById("submit-btn").addEventListener("click", function() {
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "𐎘𐎧𐎀𐎩𐎗𐎀𐎚𐎧𐎗𐎌"; // Twoje hasło w starożytnym języku

    if (passwordInput === correctPassword) {
        // Przekierowanie do strony 'book.html'
        window.location.href = "book.html";
    } else {
        alert("Nic sie nie stało");
    }
});
