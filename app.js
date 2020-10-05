
const game = function() {
    let pScore = 0;
    let cScore = 0;

    const startGame = function() {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", function(){
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        })
    };

    const playMatch = function(){
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(option =>{
                option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                playerHand.src=`./assets/${this.textContent}.png`;
                computerHand.src=`./assets/${computerChoice}.png`
            });
        });
        
    };

    const updateScore= function(){
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }

    const compareHands = function(playerChoice, computerChoice) {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent= "it is a tie";
            return;
        }
        if (playerChoice==="rock"){
            if(computerChoice==="scissors"){
                winner.textContent="Player Wins";
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice==="paper"){
            if(computerChoice==="scissors"){
                winner.textContent="Computer Wins";
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent="Player Wins";
                pScore++
                updateScore();
                return;
            }
        }

        if (playerChoice==="scissors"){
            if(computerChoice==="rock"){
                winner.textContent="Computer Wins";
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent="Player Wins";
                cScore++
                updateScore();
                return;
            }
        }
    }

 startGame();
 playMatch();
};

game();