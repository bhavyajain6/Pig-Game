'use strict';
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');

const diceEl =document.querySelector('.dice');

let currentScore = 0;
let activePlayer = 0;
let scores = [0,0];

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer == 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}


const reset = function(){
    currentScore = 0;
    scores = [0,0]
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    activePlayer = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

//Getting Started
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


//rolling the dice
btnRoll.addEventListener('click',function(){
    //1.generate a random number
    const dice = Math.floor(Math.random()*6+1);

    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    //check is one or not
    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
    }
})


btnHold.addEventListener('click',function(){
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 25){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    }
    switchPlayer();
})




btnNew.addEventListener('click',reset);