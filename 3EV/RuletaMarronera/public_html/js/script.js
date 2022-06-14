document.addEventListener('DOMContentLoaded', startGame);

let color;

function startGame(){
    let btns = document.getElementsByTagName('input');
    let redBtn = btns[0];
    let blackBtn = btns[1];
    
    redBtn.addEventListener('click', setColorRed);
    blackBtn.addEventListener('click', setColorBlack);
}

function setColorRed(){
    color = 'red';
    pickColor();
}

function setColorBlack(){
    color = 'black';
    pickColor();
}

function pickColor(){
    document.getElementById('status').innerHTML = 'Gira la ruleta cojones';
    document.getElementById('pickedColor').innerHTML = 'Tu color: '+color;
    
    document.getElementById('roll').addEventListener('click', roll);
}

function roll(){
    let result = document.getElementById('result');
    let paragraphResult = document.createElement('p');
    
    let colorSalido = Math.floor(Math.random()*2);
    
    if(colorSalido === 0){
        if (color === 'red'){
            paragraphResult.innerHTML = 'El color era rojo ¡HAS GANADO! LOLOLOLOLOOOOO';
        }else{
            paragraphResult.innerHTML = 'TONTO Has perdido';
        }
    }else if(colorSalido === 1){
        if (color === 'black'){
            paragraphResult.innerHTML = 'El color era negro ¡HAS GANADO! LOLOLOLOLOOOOO';
        }else{
            paragraphResult.innerHTML = 'TONTO Has perdido';
        }
    }
    
    result.appendChild(paragraphResult);
}