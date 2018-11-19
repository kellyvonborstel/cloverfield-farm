document.addEventListener("DOMContentLoaded", function(event) {
  // console.log("DOM fully loaded and parsed");
  var cards = document.querySelectorAll('.game-card');
  // console.log(cards);
  
  var hasTurnedCard = false;
  var firstCard;
  var secondCard;
  
  function turnCard() {
    this.classList.add('turn');
    if (!hasTurnedCard) {
      hasTurnedCard = true;
      firstCard = this;
    } else {
      hasTurnedCard = false;
      secondCard = this;
    }
    // this.classList.toggle('turn')
  }
  
  
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', turnCard);
    console.log(cards[i]);
  }
});
