let currentPage = 1; // Zaczynamy od strony 1

// Funkcja do przechodzenia do wybranej strony
function goToPage(pageNumber) {
    // Ukrywamy wszystkie strony
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Pokazujemy wybraną stronę
    document.getElementById('page-' + pageNumber).style.display = 'block';

    // Ustawiamy bieżącą stronę
    currentPage = pageNumber;
}

// Funkcja do przechodzenia do poprzedniej strony
function prevPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

// Funkcja do przechodzenia do następnej strony
function nextPage() {
    let totalPages = document.querySelectorAll('.page').length;
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

// Funkcja do obsługi hasła
document.getElementById('submit-btn').addEventListener('click', function() {
    let password = document.getElementById('password').value;
    if (password === "𐎘𐎧𐎀𐎩𐎗𐎀𐎚𐎧𐎗𐎌") { // Sprawdź, czy hasło jest poprawne
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('book').style.display = 'block';
        goToPage(1); // Rozpocznij od pierwszej strony
    } else {
        alert("Nieprawidłowe hasło");
    }
});
