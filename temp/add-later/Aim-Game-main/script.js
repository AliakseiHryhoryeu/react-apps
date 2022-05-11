const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.getAttribute('data-time'));
       screens[1].classList.add('up');
       startGame();
    }
});

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')){
        score++;
        setTimeout(event.target.remove(), 1000);
        createRandomCircle();
    }
});


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime(){
    if(time === 0){
        finishGame();
    }else{
        let curent = --time;
        if(curent<10){
            curent= `0${curent}`;
            timeEl.style.color = 'red';
        }
        setTime(curent);
    }
}

function setTime(value){
    return timeEl.innerHTML = `00:${value}`;
}

function finishGame()
{
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1><br>`;
    board.innerHTML += '<a href="" class="start">Заново</a>';
    timeEl.parentElement.style.opacity = '0';
    
}

function createRandomCircle(){
    const circle = document.createElement('div');
    const size = `${getRandomInt()}px`;
    circle.classList.add('circle');
    const x = circle.style.left = `${getRandomInt(3,95)}%`;
    const y = circle.style.top = `${getRandomInt(5,95)}%`;
   
    circle.style.width = size;
    circle.style.height = size;
    setColor(circle);
    board.append(circle);
    setInterval(fly,300, circle)
    setInterval(setColor,800, circle)
}

function setColor(elem){
		let i = 1;
    
    
    let r = getRandomInt(min = 0, max = 255),g = getRandomInt(min = 0, max = 255),b = getRandomInt(min = 0, max = 255);
    let color = `rgb(${r},${g},${b})`;
    return elem.style.background = color, elem.style.boxShadow = `0 0 10px ${color}, 0 0 25px ${color}`;
    
}

function getRandomInt(min = 25, max = 45) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
 function fly(elem){
elem.style.transform = `translateY(${getRandomInt(-100,100)}px)`
elem.style.transform = `translateX(-${getRandomInt(-100,100)}px)`
 }
  
  


