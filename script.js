const instruction = document.getElementById('instruction');
const input = document.getElementById('num');
const button = document.getElementById('btn');
const output = document.getElementById('output');

button.addEventListener("click", gameStart);

const min = 10;
const max = 100;
const answer = Math.round( Math.random()*(max-min+1)+min);

instruction.innerText = `Enter a number between ${min} and ${max}:`;
let attempts = 0;

function gameStart(){

    const value = Number(input.value);
    
    if(value < min || value > max){
        output.innerText = "Number should be between 10 and 100!";
        output.style.color = "red";
    }
    else if( isNaN(value)){
        output.innerText = "Input should be a number!";
        output.style.color = "red";
    }
    else {
        attempts++;
        if(value > answer) {
            output.innerText = "Too high, enter a smaller number.";
        }
        else if(value < answer) {
            output.innerText = "Too low, enter a larger number.";
        }
        else{
            output.innerText = `Yay! you guessed it right! The answer is ${answer}. it took you ${attempts} sttempts to get it right`;
            output.style.color = "green";
            button.removeEventListener('click', gameStart);
        }
    }
    
}
