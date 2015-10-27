$( document ).ready(function() {
    console.log( "ready!" );

  $('.cards').on('click', flipCard);

  function randomize() {
    return (Math.round(Math.random())-0.5);
  }

  var classes = [ 'blue_wall', 'teal_wall', 'white_wall', 'yellow_wall', 'navy_wall', 'green_wall', 'pink_wall', 'red_wall', 'blue_wall', 'teal_wall', 'white_wall', 'yellow_wall', 'navy_wall', 'green_wall', 'pink_wall', 'red_wall' ];
  classes.sort( randomize );
  $('.cards').each(function(i, val) {
      $(this).addClass(classes[i]);
  });

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
      }, 400)
    }
  }

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

  function checkWinner(){
    if(score == 8)
    alert('Yeeee son! you won!');
  }
});
