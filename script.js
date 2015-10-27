$( document ).ready(function() {
    console.log( "ready!" );

  //Click event
  $('.cards').on('click', flipCard);

  //Make sure only two cards can be flipped at a time = 1 turn
  //cardCounter = 0; +1
  var cardCounter = 0;

  function flipCard(){
    if(cardCounter < 1){
      $(this).toggleClass('hide');
      firstFlip = $(this).attr("class");
      cardCounter++;
      console.log(firstFlip);
    } else if(cardCounter < 2){
        $(this).toggleClass('hide');
        secondFlip = $(this).attr("class");
        cardCounter++;
     console.log(secondFlip);
     console.log(cardCounter);
    } if (firstFlip === secondFlip) {
      cardCounter = 0;
    }
  }

  //if even (%2), checkWinner/compareCards
  //else hide image

  //Check if cards are a match

  function compareCards(card1, card2){

  }
  //Compare two classes; function compareCards(card1, card2)
      //if match cards are permanently flipped; card1.class === card2.class
      //else hide cards

  //How to determine winner: checkWinner() for every turn
    //all cards matched, removed hide class
  function checkWinner(){

  }
});
