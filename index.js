let home = 0
let guest = 0

homeEl = document.getElementById("home-el")
guestEl = document.getElementById("guest-el")

function homeonep() {
    home += 1
    homeEl.textContent = home
}

function hometwop() {
    home += 2
    homeEl.textContent = home
}

function homethreep() {
    home += 3
    homeEl.textContent = home
}

function guestonep() {
    guest += 1
    guestEl.textContent = guest
}

function guesttwop() {
    guest += 2
    guestEl.textContent = guest
}

function guestthreep() {
    guest += 3
    guestEl.textContent = guest
}