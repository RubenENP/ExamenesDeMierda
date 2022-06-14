document.addEventListener('DOMContentLoaded', enableButton);

function enableButton() {
    let btn = document.getElementById('createField');
    btn.addEventListener('click', startGame);


}

function startGame() {
    let inputs = document.getElementsByTagName('input');
    inputs[0].disabled = true;
    inputs[1].disabled = true;
    inputs[2].disabled = true;
    inputs[3].disabled = true;

    let crono = document.getElementById('crono');
    let score = document.getElementById('score');
    let message = document.getElementById('message');

    let seconds = document.createElement('h4');
    seconds.innerHTML = "Seconds: 0";
    crono.appendChild(seconds);
    let scoreText = document.createElement('h4');
    scoreText.innerHTML = "Score: 0";
    score.appendChild(scoreText);
    message.innerHTML = 'PLAYING...';

    let width = document.getElementById('rows').value;
    let height = document.getElementById('columns').value;
    let level = document.getElementById('level').value;

    generateSequence(width, height, level);
    drawField(width, height);
}

function drawField(width, height) {
    let field = document.getElementById('field');

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let btn = document.createElement('button');
            btn.id = j + "_" + i;
            btn.style.width = "50px";
            btn.style.height = "50px";
            btn.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            btn.name = 'btnField';

            field.appendChild(btn);
        }
        let br = document.createElement('br');
        field.appendChild(br);
    }

    playGame();
}

const colors = ['blue'];

function playGame() {
    let fieldButtons = document.getElementsByName('btnField');
    enableEventsField(fieldButtons);

    countSequencePosition = 0;
    intervalShowElements = setInterval(function () {
        showElements(roundNr);
    }, 1000);
    
    checkSequenceIndex = 0;
}

function enableEventsField(fieldButtons) {
    for (let i = 0; i < fieldButtons.length; i++) {
        fieldButtons[i].addEventListener('mousedown', function () {
            check(fieldButtons[i]);
        });
    }
}

function disableEventsField(fieldButtons) {
    for (let i = 0; i < fieldButtons.length; i++) {
        fieldButtons[i].removeEventListener('mousedown', check);
    }
}

function check(btn) {
    if (btn.id === sequence[checkSequenceIndex]){
        if (checkSequenceIndex === roundNr){
            roundNr++;
            playGame();
        }
    }else{
        gameOver();
    }
    
    checkSequenceIndex ++;
}

function generateSequence(width, height, level) {
    for (let i = 0; i < level * 5; i++) {
        let coordinate = Math.floor(Math.random() * width) + '_' + Math.floor(Math.random() * height);
        sequence.push(coordinate);
    }

}

function showElements(roundNr) {
    let fieldButtons = document.getElementsByName('btnField');
    disableEventsField(fieldButtons);

    let btn = document.getElementById(sequence[sequencePosition]);
    showElement(btn);

    sequencePosition++;
    countSequencePosition++;

    if (countSequencePosition === roundNr) {
        clearInterval(intervalShowElements);
        enableEventsField(fieldButtons);
    }
}

function showElement(btn) {
    let originalColor = btn.style.backgroundColor;
    btn.style.backgroundColor = 'red';
    setTimeout(() => {
        btn.style.backgroundColor = originalColor;
    }, 1000);

    console.log(originalColor);
}

function gameOver(){
    alert('gameover');
}

let sequence = [];
let intervalShowElements;
let intervalShowElement;
let countSequencePosition;
let sequencePosition = 0;
let roundNr = 1;
let clickedButtons = [];
let checkSequenceIndex = 0;