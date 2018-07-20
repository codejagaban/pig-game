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

            var lastDice;




            document.querySelector(".btn-roll").addEventListener("click", function() {
            
            if (gamePlaying) {
                    // 1. Random Number
                
            var dice1 = Math.floor(Math.random() * 6) + 1;

            var dice2 = Math.floor(Math.random() * 6) + 1;
        
            //  2.Display the result
            document.getElementById('dice-1').style.display = 'block';

            document.getElementById('dice-2').style.display = 'block';

            document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';

            document.getElementById('dice-2').src = 'dice-' + dice2+ '.png';
        
            // Change the Current score of the player
        
            // document.querySelector(".dice").style.display = "block";
        
        
            //3. check to see if the previous roll and the current role is two 6
            // if (dice === 6 && lastDice === 6 ) {

            //     //the player looses the global score
            //     scores[activePlayer] = 0;

            // //Update the UI
            // document.querySelector("#score-" + activePlayer).textContent = '0';

            // nextPlayer();


            // } else 
            
            if (dice1 !== 1 && dice2 !== 1)  {
                // Add Score
            roundScore += dice1 + dice2;
            document.querySelector("#current-" + activePlayer ).textContent = roundScore;
        
            } else {
        
        
            nextPlayer();
        
            }
            }

            // stores the previous roll in the lastDice Variable
            // lastDice = dice;
        
            });
        
            
        
        
            document.querySelector(".btn-hold").addEventListener("click", function () {
            if(gamePlaying) {
                
            // Add CURRENT score to the GlOBAL score
            scores[activePlayer] += roundScore;


            //Update the UI
            document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
            var input = document.querySelector('.final-score').value;
            if (input) {

                  winningScore = input;

                
            } else {
                winningScore = 100;
                
            }
            
            




            // Check if the player Won the Game
            if (scores[activePlayer] >= winningScore) {
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

            document.getElementById('dice-1').style.display = 'none';

            document.getElementById('dice-2').style.display = 'none';


            }

            // Resets the Whole Game

            document.querySelector(".btn-new").addEventListener("click",init);


            // Resets Every initial Value to Zero
            function init() {
            scores = [0, 0];
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;

            document.getElementById('dice-1').style.display = 'none';

            document.getElementById('dice-2').style.display = 'none';


            document.getElementById("score-0").textContent = "0";

            document.getElementById("score-1").textContent = "0";

            document.getElementById("current-0").textContent = "0";

            document.getElementById("current-1").textContent = "0";

            document.getElementById("name-0").textContent = "Player 1";

            document.getElementById("name-1").textContent = "Player 2";

            document.querySelector(".player-0-panel").classList.remove("winner");

            document.querySelector(".player-0-panel").classList.remove("active");

    

            document.querySelector(".player-1-panel").classList.remove("winner");

            document.querySelector(".player-1-panel").classList.remove("active");
               document.querySelector(".player-0-panel").classList.add("active");
            

            
            }
        