$( document ).ready(function() {
    console.log( "ready!" );

  //Variables/////////////////////////////
  var classes = [ 'blue_wall', 'teal_wall', 'white_wall', 'yellow_wall', 'navy_wall', 'green_wall', 'pink_wall', 'red_wall', 'blue_wall', 'teal_wall', 'white_wall', 'yellow_wall', 'navy_wall', 'green_wall', 'pink_wall', 'red_wall' ];

  var hide = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide']

  var cardClass = ['cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards'];

  var cardCounter = 0;

  var score = 0;
  /////////////////////////////////////////

  //Card Click Event//////////////////////
  $('.cards').on('click', flipCard);
  //

  //Reset Event/Function//////////////////
  $('.button').on('click', function(){
    classes.sort( randomize );
    $('.cards').each(function(i, val) {
        $(this).removeClass();
        $(this).addClass(cardClass[i]);
        $(this).addClass(classes[i]);
        $(this).addClass(hide[i]);
        score = 0;
    });
  });
  /////////////////////////////////////////

  //Randomize Board///////////////////////
  function randomize() {
    return (Math.round(Math.random())-0.5);
  }
  /////////////////////////////////////////

  //Check for Winner
  function checkWinner(){
    if(score == 8)
    alert('You my friend, are a champion!');
  }
  /////////////////////////////////////////

  //Comparing Two Cards////////////////////
  function compareCards(card1, card2){
    if(card1.attr('class') == card2.attr('class')){
      score++;
      cardCounter = 0;
    } else if(card1.attr('class') != card2.attr('class')){
      card1.toggleClass('hide');
      card2.toggleClass('hide');
      cardCounter = 0;
    }
    checkWinner();
  }
  /////////////////////////////////////////


  //The Game/////////////////////////////////////////
  function flipCard(){
    if(cardCounter < 1){
      $(this).toggleClass('hide');
      firstFlip = $(this);
      cardCounter++;
    } else if(cardCounter < 2){
        if ($(this).hasClass('hide')) {
          $(this).toggleClass('hide');
          secondFlip = $(this);
          cardCounter++;
        }
      event.preventDefault();
    }
    if(cardCounter == 2){
      setTimeout(function(){
        compareCards(firstFlip, secondFlip);
      }, 400)
    }
  }
  //////////////////////////////////////////////////

});
