document.getElementById('heart1').addEventListener('click', function() {
    document.getElementById('buttonContainer').style.display = 'block';
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'I love you ❤️';
    
    // Move the "No" button to a random position after "Yes" is clicked
    moveNoButton();
});

// Function to move the "No" button to a random position
function moveNoButton() {
    let noButton = document.getElementById('no-btn');
    
    // Generate random positions for the button
    let randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Random X position
    let randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Random Y position
    
    // Set the new position for the button
    noButton.style.position = 'absolute'; // Position it absolutely so it can move
    noButton.style.left = `${randomX}px`; // Set random left position
    noButton.style.top = `${randomY}px`; // Set random top position
}

let noButton = document.getElementById('no-btn');

// When the "No" button is clicked, move it to a random position
noButton.addEventListener('click', function() {
    moveNoButton(); // Move the button to a new random position on click
});
