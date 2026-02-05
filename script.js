const heart = document.getElementById('heart1');
const buttonContainer = document.getElementById('buttonContainer');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');

heart.addEventListener('click', () => {
  buttonContainer.style.display = 'block';
});

yesBtn.addEventListener('click', () => {
  message.style.display = 'block';
});

/* MOVE NO BUTTON RANDOMLY (mobile + desktop) */
function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = 'fixed';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

/* works on click + touch */
noBtn.addEventListener('click', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);
