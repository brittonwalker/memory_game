$( document ).ready(function() {
    console.log( "ready!" );

  //Variables/////////////////////////////
  var classes = [ 'blue_wall', 'teal_wall', 'white_wall', 'yellow_wall', 'navy_wall', 'green_wall', 'pink_wall', 'red_wall', 'blue_wall', 'teal_wall', 'white_wall', 'yellow_wall', 'navy_wall', 'green_wall', 'pink_wall', 'red_wall' ];
  // NHO: What is the point of this array of 'hide's ? How might we use a loop to assign these classes?
  var hide = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide', 'hide']
  // NHO: What is the point of this array of 'cards'?
  var cardClass = ['cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards', 'cards'];

  var cardCounter = 0;

  var score = 0;
  /////////////////////////////////////////

  //Card Click Event//////////////////////
  $('.cards').on('click', flipCard);
  //

  //Reset Event/Function//////////////////
  $('.button').on('click', function(){
    classes.sort( randomize ); // NHO: clever!
    $('.cards').each(function(i, val) {
        $(this).removeClass(); // NHO: Could be useful to include line comments for your future self or other developers
        $(this).addClass(cardClass[i]);
        $(this).addClass(classes[i]);
        $(this).addClass(hide[i]); // NHO: SO every "card" starts off with a class of hide, cards, and a color wall? Why not just include them in the html to start?
        // NHO: Looks to be a perfect opportunity to dynamically create the cards, thinking along the lines of an 'initGameBoard' function
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
    if(score == 8) // NHO: How could we grab this value from somewhere so it's not hard-coded?
    alert('You my friend, are a champion!');
  }
  /////////////////////////////////////////

  //Comparing Two Cards////////////////////
  function compareCards(card1, card2){
    // NHO: Would recommend loging the values of card1, and card2
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
      event.preventDefault(); // NHO: Why are we preventing the default here not for any other path?
    }
    if(cardCounter == 2){
      setTimeout(function(){
        compareCards(firstFlip, secondFlip);
      }, 400)
    }
  }
  //////////////////////////////////////////////////

});
// NHO: Overall JS looks very good! Would like to see you try to work to refactor to a more object-oriented approach in the future
// NHO: Also, a lot of the functionality comes from the concept of adding/removing classes to establish a match,
// not that there's anything wrong with this, but can you think of any alternatives?
