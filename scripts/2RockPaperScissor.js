let score = JSON.parse(localStorage.getItem("score")) ||
{
    win: 0,
    lose: 0,
    tie: 0
}
//calling the function up so that it can be seen on the page constantly
updateScoreElement()

function playGame(playerMove){
    //function inside a function
    
    const computerMove= pickComputerMove()
    let result = '';
    if(playerMove === 'rock' ){
        if(computerMove === 'rock'){
            result = 'Tie.'
        } else if (computerMove === 'paper'){
            result = 'You Lose. :('
        } else if(computerMove === 'scissor'){
            result = 'You win!'
        }
    }else if (playerMove === 'paper'){
        if(computerMove === 'paper'){
            result = 'Tie.'
        } else if (computerMove === 'scissor'){
            result = 'You Lose. :('
        } else if(computerMove === 'rock'){
            result = 'You win!'
        }
    }else if (playerMove === 'scissor'){
        if(computerMove === 'scissor'){
            result = 'Tie.'
        } else if (computerMove === 'rock'){
            result = 'You Lose. :('
        } else if(computerMove === 'paper'){
            result = 'You win!'
        }
    }

    if(result === 'You win!') {score.win+= 1}
    else if(result === 'You Lose. :(') {score.lose+= 1}
    else if(result === 'Tie.') {score.tie+= 1}

    //since local storage only supports JSON format or string format..
    localStorage.setItem('SCORES', JSON.stringify(score))

    updateScoreElement();

    document.querySelector(".js-result").innerHTML= result

    document.querySelector(".js-moves").innerHTML=
    `You: <img src='/images/${playerMove}-emoji.png' class='move-icon'> - <img src='/images/${computerMove}-emoji.png' class='move-icon'> Computer: `;
}

// displaying the data inside the html element 
function updateScoreElement(){
        document.querySelector('.js-score').innerHTML =
        `Wins: ${score.win},
            Losses: ${score.lose},
            Ties: ${score.tie}`
        }

// let computerMove =''; //rather make the function return the value
function pickComputerMove(){
    /* Math.random generates the random number between 0 and 1 */
    const randomNumber = Math.random();
    let computerMove ='';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper'
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissor'
    }
    return computerMove
    // console.log(computerMove)
}