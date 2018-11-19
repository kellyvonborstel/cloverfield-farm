var cards = document.querySelectorAll('.game-card');

function turnCard() {
  // console.log(this);
  this.classList.toggle('turn')
}

cards.forEach(card => card.addEventListener('click', turnCard));