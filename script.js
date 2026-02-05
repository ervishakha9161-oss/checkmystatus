document.getElementById('heart1').addEventListener('click', function() {
    document.getElementById('buttonContainer').style.display = 'block';
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'I love you ❤️';
    document.getElementById('message').classList.add('show');
});

document.getElementById('no-btn').addEventListener('click', function() {
    moveNoButton();
    // Change the "No" button color to red when clicked
    this.style.backgroundColor = '#ff4d4d';
});

// Function to move the "No" button to a random position
function moveNoButton() {
    let noButton = document.getElementById('no-btn');
    
    // Generate random positions for the button within the window
    let randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Random X position
    let randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Random Y position
    
    // Set the new position for the "No" button
    noButton.style.position = 'absolute'; // Allow absolute positioning
    noButton.style.left = `${randomX}px`; // Set random left position
    noButton.style.top = `${randomY}px`; // Set random top position
}
