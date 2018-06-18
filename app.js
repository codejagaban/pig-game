    /*
    GAME RULES:

    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
    - The first player to reach 100 points on GLOBAL score wins the game

    */

    var scores, roundScore, activePlayer, gamePlaying; 

    init();




        document.querySelector(".btn-roll").addEventListener("click", function() {
        
        if (gamePlaying) {
                // 1. Random Number
            
        var dice = Math.floor(Math.random() * 6) + 1;
    
        //  2.Display the result
        var diceDOM =  document.querySelector(".dice");
    
        diceDOM.style.display = "block";
    
        diceDOM.src = "dice-" + dice + ".png";
    
        // Change the Current score of the player
    
        document.querySelector(".dice").style.display = "block";
    
    
        //3. Update the score IF the rolled number is NOT a 1
        if (dice !== 1 )  {
            // Add Score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer ).textContent = roundScore; 
    
        } else {
    
    
        nextPlayer();
    
        }
        }
    
        }); 
    
        
    
    
    document.querySelector(".btn-hold").addEventListener("click", function () {
        if(gamePlaying) {
            
        // Add CURRENT score to the GlOBAL score
    scores[activePlayer] += roundScore;


    //Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];




    // Check if the player Won the Game
    if (scores[activePlayer] >= 100) {
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        //   Hide the Dice 
        hideDice();
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        gamePlaying = false;

        

        
    } else {

        // Next Player
        nextPlayer(); 

    }


        }
    
        
    });

    function nextPlayer() {
            // Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        // Reset The Score to Zero

        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";

        // Toggle The Active Class Between the Players

        document.querySelector(".player-0-panel").classList.toggle("active");
        
        document.querySelector(".player-1-panel").classList.toggle("active");

        // Hide the Dice For A New Throw

    hideDice();
        
    }

    
    function hideDice() {
        // Hide the Dice For A New Throw

    document.querySelector(".dice").style.display = "none";

    }

    // Resets the Whole Game

    document.querySelector(".btn-new").addEventListener("click",init);


    // Resets Every initial Value to Zero
    function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        document.querySelector(".dice").style.display = "none";

    document.getElementById("score-0").textContent = "0";

    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";

    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";

    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");

    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-1-panel").classList.remove("add");

    document.querySelector(".player-1-panel").classList.remove("active");

        
    }

    