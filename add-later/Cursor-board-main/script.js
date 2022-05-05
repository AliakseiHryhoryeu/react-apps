const board = document.querySelector('#board')
const colors = ['#fbf2eb', '#2e5e84', '#bbd70b', '#fa9705', '#d7beac'];const screenWidth = window.screen.width

const SQUARES_NUMBER = (500*500)/(50*50)

for(let i =0; i<SQUARES_NUMBER;i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave',()=> {
        removeColor(square)
    })
    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor=color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.backgroundColor='transparent'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}