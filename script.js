$( document ).ready(function() {
    console.log( "ready!" );

  //Click event
  $('.cards').on('click', flipCard);

  //Make sure only two cards can be flipped at a time = 1 turn
  //cardCounter = 0; +1
  var cardCounter = 0;
  var score = 0;

  function flipCard(){
    if(cardCounter < 1){
      $(this).toggleClass('hide');
      // firstFlip = $(this).attr("class");
      firstFlip = $(this);
      cardCounter++;
      console.log(cardCounter);
      console.log(firstFlip);
    } else if(cardCounter < 2){
        if ($(this).hasClass('hide')) {
          $(this).toggleClass('hide');
          // secondFlip = $(this).attr("class");
          secondFlip = $(this);
          cardCounter++;
          console.log(secondFlip);
          console.log(cardCounter);
        }
      event.preventDefault();
    }
    if(cardCounter == 2){
      setTimeout(function(){
        compareCards(firstFlip, secondFlip);
      }, 100)
    checkWinner();
    }

  }

  //if even (%2), checkWinner/compareCards
  //else hide image

  //Check if cards are a match

  function compareCards(card1, card2){
    if(card1.attr('class') == card2.attr('class')){
      score += 1;
      cardCounter = 0;
      console.log('match');
      console.log(score);
    } else if(card1.attr('class') != card2.attr('class')){
      card1.toggleClass('hide');
      card2.toggleClass('hide');
      cardCounter = 0;
    }
    checkWinner();
  }
  //Compare two classes; function compareCards(card1, card2)
      //if match cards are permanently flipped; card1.class === card2.class
      //else hide cards

  //How to determine winner: checkWinner() for every turn
    //all cards matched, removed hide class
  function checkWinner(){
    if(score == 8)
    alert('Yeeee son! you won!');
  }
});
