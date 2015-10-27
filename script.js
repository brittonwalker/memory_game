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
      firstFlip = $(this).attr("class");
      cardCounter++;
      console.log(cardCounter);
      console.log(firstFlip);
    } else if(cardCounter < 2){
        if ($(this).hasClass('hide')) {
          $(this).toggleClass('hide');
          secondFlip = $(this).attr("class");
          cardCounter++;
          console.log(secondFlip);
          console.log(cardCounter);
        }
      event.preventDefault();
    }
    compareCards(firstFlip, secondFlip);
    checkWinner();
  }

  //if even (%2), checkWinner/compareCards
  //else hide image

  //Check if cards are a match

  function compareCards(card1, card2){
    if(card1 === card2){
      score += 1;
      cardCounter = 0;
      console.log('match');
      console.log(score);
    } else {
        card1 = $(this).toggleClass('hide');
        card2 = $(this).toggleClass('hide');
    }
  }
  //Compare two classes; function compareCards(card1, card2)
      //if match cards are permanently flipped; card1.class === card2.class
      //else hide cards

  //How to determine winner: checkWinner() for every turn
    //all cards matched, removed hide class
  function checkWinner(){
    if(score === 8)
    alert('Yeeee son! you won!');
  }
});



//
// $( document ).ready(function() {
//     console.log( "ready!" );
//
//   //Click event
//   $('.cards').on('click', flipCard);
//
//
//   var cardCounter = 0;
//
//   memoryArray = []
//
//   var score = 0;
//
//   //Make sure only two cards can be flipped at a time = 1 turn
//   //cardCounter = 0; +1
//   function flipCard(){
//     if(cardCounter < 1){
//       $(this).toggleClass('hide');
//       firstFlip = $(this).attr("class");
//       memoryArray.push(firstFlip);
//       cardCounter++;
//       // memoryArray.push(firstFlip);
//       console.log(firstFlip);
//     } else if(cardCounter < 2){
//         $(this).toggleClass('hide');
//         secondFlip = $(this).attr("class");
//         memoryArray.push(secondFlip);
//         console.log(secondFlip);
//         compareCards(firstFlip, secondFlip)
//         // memoryArray.push(secondFlip);
//         // cardCounter++;
//         // console.log(secondFlip);
//         // console.log(cardCounter);
//     } // if (firstFlip === secondFlip) {
//     //   cardCounter = 0;
//     //   playerScore++;
//     //   console.log('match')
//     // }
//   }
//
//   //if even (%2), checkWinner/compareCards
//   //else hide image
//
//   //Check if cards are a match
//
//   //Compare two classes; function compareCards(card1, card2)
//       //if match cards are permanently flipped; card1.class === card2.class
//       //else hide cards
//   function compareCards(card1, card2){
//     if(memoryArray[0] === memoryArray[1]) {
//       console.log("You made a match!");
//       score++;
//       cardCounter = 0;
//       console.log(score);
//     } else if (card1 !== card2) {
//       $(this).toggleClass('hide');
//       $(this).toggleClass('hide');
//     }
//   }
//
//
//   //How to determine winner: checkWinner() for every turn
//     //all cards matched, removed hide class
//   function checkWinner(){
//
//   }
// });
