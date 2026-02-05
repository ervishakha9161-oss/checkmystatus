document.getElementById('heart1').addEventListener('click', function() {
    document.getElementById('buttonContainer').style.display = 'block';
});

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('message').textContent = 'I love you ❤️';
});

let noButton = document.getElementById('no-btn');

noButton.addEventListener('click', function() {
    noButton.textContent = 'Yes';
    noButton.id = 'yes-btn';
    document.getElementById('yes-btn').id = 'no-btn';
    document.getElementById('yes-btn').textContent = 'No';
});

noButton.addEventListener('mouseenter', function() {
    noButton.textContent = 'Yes';
});

noButton.addEventListener('mouseleave', function() {
    noButton.textContent = 'No';
});
