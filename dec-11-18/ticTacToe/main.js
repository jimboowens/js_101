let whoseTurn = 1
let player1Squares = []
let player2Squares = []
let decision = false
let gameOn = true
let opponent
const winningCombos = [
    [`A1`,`B1`,`C1`],
    [`A2`,`B2`,`C2`],
    [`A3`,`B3`,`C3`],
    [`A1`,`A2`,`A3`],
    [`B1`,`B2`,`B3`],
    [`C1`,`C2`,`C3`],
    [`A1`,`B2`,`C3`],
    [`C1`,`B2`,`A3`],
]
let comLogic = []
const squares = document.getElementsByClassName('square')
while (decision != true){
    opponent = prompt("would you like to play the computer (yes or no)?")
    if (opponent != 'yes' && opponent != 'no'){
        alert("Invalid Input! Please select yes or no")
    } else{
        decision = true
    }
}
function computerLogic(){
    console.log("computerLogic")
    if (document.getElementById(B2) === '-'){
        document.getElementById('B2').innerHTML = 'O'
        player1Squares.push("B2")
    }
}
if (opponent == 'yes'){
    for (let i=0;i<squares.length;i++){
        squares[i].addEventListener(`click`,function(event){
            if (gameOn ==true){
                if (this.innerHTML === `-`){
                    this.innerHTML = `X`
                    player2Squares.push(this.id)
                    checkWin(player2Squares, whoseTurn)
                    computerLogic()
                } else {
                    document.getElementById('message').innerHTML = "Sorry, that square is taken"  
                }
            }
        })
    }
} else{
    for (let i=0;i<squares.length;i++){
        squares[i].addEventListener(`click`,function(event){
            if (gameOn ==true){
                if (this.innerHTML === `-`){
                    if (whoseTurn % 2 ==0){
                    this.innerHTML = `O`
                    document.getElementById('message').innerHTML = "Now it's X's Turn"
                    player1Squares.push(this.id)
                    checkWin(player1Squares, whoseTurn)
                    whoseTurn=1
                    }else{
                    this.innerHTML = `X`
                    document.getElementById('message').innerHTML = "Now it's O's Turn"
                    player2Squares.push(this.id)
                    checkWin(player2Squares, whoseTurn)
                    whoseTurn=2
                    }
                } else {
                    document.getElementById('message').innerHTML = "Sorry, that square is taken"  
                }
            }
        })
    }
    
}
function checkWin(playerSquares, whoMarked){
    console.log("Checking to see who won...")
    for(let i = 0; i < winningCombos.length; i++){   
        let squareCount = 0
        for(let j = 0; j < winningCombos[i].length; j++){ 
            const winningSquare = winningCombos[i][j];
            if(playerSquares.includes(winningSquare)){
                squareCount++;
                if(squareCount === 3){
                    endGame(winningCombos[i], whoMarked)
                }
            }
        }  
    }
}
function endGame(winningCombo, whoWon){
    document.getElementById('message').innerHTML = `Congratulations, Player ${whoWon}! You won!!`
    for (let i=0;i<winningCombo.length;i++){
        const winningSquare = winningCombo[i]
        const squareElem = document.getElementById(winningSquare)
        console.dir(squareElem)
        squareElem.className += " winning-square"
        gameOn = false
    }
}