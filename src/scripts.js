
// game is based on this tutorial https://www.youtube.com/watch?v=ZniVgo8U7ek

$(function() {
  var cardTurned = false;
  var boardLocked = false;
  var card1;
  var card2;

  $('.game-card').on('click', turnCard);
  $('.game-card').each(function() {
    var position = Math.floor(Math.random() * 12);
    $(this).style.order = position;
  });

  function turnCard() {
    if (!boardLocked && !(this === card1)) {
      $(this).addClass('turn');
      if (!cardTurned) {
        cardTurned = true;
        card1 = this;
        return;
      }
      card2 = this;
      compareCards();
    }
  }
  
  function compareCards() {
    var card1Veg = card1.getAttribute('data-veg');
    var card2Veg = card2.getAttribute('data-veg');
    if (card1Veg === card2Veg) {
      $(card1).off();
      $(card2).off();
      reset();
    } else {
      boardLocked = true;
      setTimeout(() => {
        $(card1).removeClass('turn');
        $(card2).removeClass('turn');
        reset();
      }, 1000);
    }
  }
  
  function reset() {
    cardTurned = false;
    boardLocked = false;
    card1 = null;
    card2 = null;
  }
});