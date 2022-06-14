document.addEventListener('DOMContentLoaded', start);

function start(){
    let mezclarBtn = document.getElementById('btn');
    mezclarBtn.addEventListener('click', mezclar);
}

function mezclar(){
    let textoOriginal = document.getElementById('area').value;
    let palabrasArray = textoOriginal.split(' ');
    let palabraFinal;
    let textoFinal='';
    

    for (let i = 0; i<palabrasArray.length; i++){
        if(palabrasArray[i].length > 3){
            let letrasArray = palabrasArray[i].split('');

            for (let j = palabrasArray[i].length-2; j>0; j--){
                let primeraLetra = letrasArray[j];
                let posicionRandom = Math.floor(Math.random()*(palabrasArray[i].length-2))+1;
                letrasArray[j] = letrasArray[posicionRandom];;
                letrasArray[posicionRandom] = primeraLetra;
            }

            palabraFinal = letrasArray.join('');
        }else{
            palabraFinal = palabrasArray[i];
        }

        textoFinal += palabraFinal+' ';
    }



    let resultado = document.createElement('p');
    resultado.innerHTML = textoFinal;
    let divResultado = document.getElementById('resultado');

    divResultado.appendChild(resultado);
}