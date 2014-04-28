$(document).ready(function(){
  var turn = 0;
  var player1 = [];
  var player2 = [];

  var winCombos = [
  [box1, box2, box3], 
  [box4, box5, box6],
  [box7, box8, box9],
  [box1, box4, box7],
  [box2, box5, box8],
  [box3, box6, box9],
  [box1, box5, box9],
  [box3, box5, box7]
  ];

  //switch between human and computer
  // if ()
  // {

  // }
  // else
  // {
    playGameWithHuman();
  // }


  //start new game between two players
  function playGameWithHuman()
  {
    $('td').one('click', function() 
    {
      if (turn % 2 === 0)
      {
        var id = $(this).attr("id");
        player1.push(id);
        $(this).append('X');
        $('p').replaceWith("<p>Player 2 turn</p>");
        if (turn > 3)
        {
          checkWinWithHuman();
        }
      }
      else
      {
        var id = $(this).attr("id");
        player2.push(id);
        $(this).append('O');
        $('p').replaceWith("<p>Player 1 turn</p>"); 
        if (turn > 4)
        {
          checkWinWithHuman();
        }
      }
      turn++;
      return tieGame();
    });
  }

  //check if a player has won
  function checkWinWithHuman()
  {
    for (i = 0; i < winCombos.length; i++)
    {
      if (winCombos[i][0].textContent === "X" && winCombos[i][1].textContent === "X" && winCombos[i][2].textContent === "X")
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
        playAgain();
      }
      else if (winCombos[i][0].textContent === "O" && winCombos[i][1].textContent === "O" && winCombos[i][2].textContent === "O")
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
        playAgain();
      }
    }
  }

  //start a new game with computer
  function playGameWithComputer()
  {

  }


  //check if the game is tied
  function tieGame()
  {
    if (turn === 9)
    {
      $('p').replaceWith("<h1 class = 'tie-msg'>Well, that was a snoozefest ...</h1>");
      $('td').off('click');
      return playAgain();
    }
  }

  // play again
  function playAgain()
  {
    $('td').off('click');
    $('#play-again').mouseover(function()
    {
      $(this).css(
        {
          'background-color': 'rgba(46, 204, 113,1.0)',
          'color': 'white',
          'cursor': 'pointer'
        });
    });

    $('#play-again').mouseleave(function()
    {
      $(this).css(
        {
          'background-color': 'white',
          'color': 'black'
        });
    });

    $('#play-again').click(function()
    {
      location.reload();
    });
  }

});