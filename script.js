document.getElementById('heart1').addEventListener('click', function() {
    document.getElementById('buttonContainer').style.display = 'block';
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'I love you Shubu❤️';
    
    // Show the party pop-up
    showPartyPopup();

    // Move the "No" button to a random position
    moveNoButton();
});

// Function to move the "No" button to a random position
function moveNoButton() {
    let noButton = document.getElementById('no-btn');
    
    // Generate random positions for the button
    let randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Random X position
    let randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Random Y position
    
    // Set the new position for the "No" button
    noButton.style.position = 'absolute'; // Allow absolute positioning
    noButton.style.left = `${randomX}px`; // Set random left position
    noButton.style.top = `${randomY}px`; // Set random top position
}

// Function to show the party pop-up
function showPartyPopup() {
    let popup = document.getElementById('partyPopup');
    popup.style.display = 'block';
    
    // Make the party pop-up disappear after 3 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
}

// Keep moving the "No" button when clicked
let noButton = document.getElementById('no-btn');

noButton.addEventListener('click', function() {
    // Move the "No" button to a new random position on each click
    moveNoButton();
});
