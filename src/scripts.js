document.addEventListener("DOMContentLoaded", function(event) {
  // console.log("DOM fully loaded and parsed");
  var cards = document.querySelectorAll('.game-card');
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', turnCard);
    console.log(cards[i]);
  }
  
  var hasTurnedCard = false;
  var firstCard;
  var secondCard;
  
  function turnCard() {
    this.classList.add('turn');
    if (!hasTurnedCard) {
      hasTurnedCard = true;
      firstCard = this;
      return;
    } else {
      hasTurnedCard = false;
      secondCard = this;
      compareCards(); 
    }
  }

  function compareCards() {
    if (firstCard.dataset.veg === secondCard.dataset.veg) {
      firstCard.removeEventListener('click', turnCard);
      secondCard.removeEventListener('click', turnCard);
    } else {
      setTimeout(function() {
        firstCard.classList.remove('turn');
        secondCard.classList.remove('turn');
      }, 2000);
    }
  }
});

