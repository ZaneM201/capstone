// Countdown Timer
function updateCountdown() {
    // Check if countdown elements exist on the page
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    if (countdownNumbers.length === 0) {
        return; // Exit if countdown elements don't exist
    }

    const raceDate = new Date('2026-03-06T21:00:00').getTime();
    const now = new Date().getTime();
    const distance = raceDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Safely update each countdown element
    if (countdownNumbers[0]) countdownNumbers[0].textContent = days;
    if (countdownNumbers[1]) countdownNumbers[1].textContent = hours;
    if (countdownNumbers[2]) countdownNumbers[2].textContent = minutes;
    if (countdownNumbers[3]) countdownNumbers[3].textContent = seconds;

    if (distance < 0) {
        const countdownContainer = document.querySelector('.countdown');
        if (countdownContainer) {
            countdownContainer.innerHTML = '<p style="color: var(--accent-red); font-size: 1.5rem;">Race in Progress!</p>';
        }
    }
}

// Only start countdown if elements exist
if (document.querySelector('.countdown')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}