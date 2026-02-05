// Show the "Yes" and "No" buttons when the heart is clicked
document.getElementById('heart1').addEventListener('click', function() {
    // Both "Yes" and "No" buttons will show after the heart click
    document.getElementById('buttonContainer').style.display = 'block'; 
});

// Show the message when "Yes" is clicked
document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'I love you ❤️';
    document.getElementById('message').classList.add('show');
});

// Move the "No" button to a random position when clicked
document.getElementById('no-btn').addEventListener('click', function() {
    moveNoButton();  // Move "No" button to a random position
    this.classList.add('clicked'); // Change the "No" button color to red when clicked
});

// Function to move the "No" button to a random position
function moveNoButton() {
    let noButton = document.getElementById('no-btn');
    
    // Generate random positions for the button within the window
    let randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Random X position
    let randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Random Y position
    
    // Set the new position for the "No" button
    noButton.style.left = `${randomX}px`; // Set random left position
    noButton.style.top = `${randomY}px`; // Set random top position
}
