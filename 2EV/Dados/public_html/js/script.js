document.addEventListener('DOMContentLoaded', startGame);
let eventListener;

function startGame(){
    let button = document.getElementById('btn');
    
    eventListener = button.addEventListener('click', roll);
}

function roll(){
    let diceNum1 = Math.floor(Math.random()*6)+1;
    let diceNum2 = Math.floor(Math.random()*6)+1;
    
    let diceImg1 = "img/dice"+diceNum1+".png";
    let diceImg2 = "img/dice"+diceNum2+".png";
    
    document.getElementsByTagName('img')[0].src =diceImg1;
    document.getElementsByTagName('img')[1].src =diceImg2;
    
    check(diceNum1, diceNum2);
}

function check(diceNum1, diceNum2){
  let displayText = document.getElementById('display');
    let sum = diceNum1+diceNum2;
    
    if(sum === 11){
        displayText.innerHTML = "CONGRATS!!! YOU WIN";
        displayText.style.color = 'green';
    }else if (diceNum1 === diceNum2){
        displayText.innerHTML = "THE DICES ARE EQUAL";
        displayText.style.color = 'blue';
    }else{
        displayText.innerHTML = "TRY AGAIN";
        displayText.style.color = 'red';
    }  
    
    restartGame();
}

function restartGame(){
    let button = document.getElementById('btn');
    button.value = "Play again?";
    button.removeEventListener('click');
}