document.getElementById('heart1').addEventListener('click', function() {
    document.getElementById('buttonContainer').style.display = 'block';
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'I love you ❤️';
    
    // Make the "No" button move to a random position on the page
    moveNoButton();
});

// Function to move the "No" button to a random position
function moveNoButton() {
    let noButton = document.getElementById('no-btn');
    // Set the "No" button to move to a random position
    let randomX = Math.random() * window.innerWidth; // Random X position
    let randomY = Math.random() * window.innerHeight; // Random Y position
    
    // Set the new position
    noButton.style.position = 'absolute'; // Make it absolute so it can move freely
    noButton.style.left = `${randomX}px`; // Random left position
    noButton.style.top = `${randomY}px`; // Random top position
}

let noButton = document.getElementById('no-btn');

// When the "No" button is clicked, change its text to "Yes" and move it
noButton.addEventListener('click', function() {
    // Change the text of "No" to "Yes"
    noButton.textContent = 'Yes';
    
    // Swap the IDs so the button now behaves like "Yes"
    noButton.id = 'yes-btn';
    document.getElementById('yes-btn').id = 'no-btn';
    document.getElementById('yes-btn').textContent = 'No';

    // Make the "No" button move again after it's clicked
    moveNoButton();
});
