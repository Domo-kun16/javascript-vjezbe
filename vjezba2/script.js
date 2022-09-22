

function showDates() {

    datum = document.getElementById("datum");
    datum.innerHTML = Date();

}

function showYear() {

    godina = document.getElementById("godina");
    godina.innerHTML = new Date().getFullYear();

}