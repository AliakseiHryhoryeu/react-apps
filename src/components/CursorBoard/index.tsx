import React, { FC, useRef, useState } from 'react'
import styles from 'src/styles/CursorBoard.module.scss'


const CursorBoard: FC = () => {
    const board = useRef(document.createElement("div"))
    board.current.classList.add('board')
    const colors = [
        { id: 1, color: '#fbf2eb' },
        { id: 2, color: '#2e5e84' },
        { id: 3, color: '#bbd70b' },
        { id: 4, color: '#fa9705' },
        { id: 5, color: '#d7beac' },
    ]
    const [screenWidth, setScreenWidth] = useState(10)
    const SQUARES_NUMBER = (500 * 500) / (50 * 50)

    function removeColor(element) {
        element.style.backgroundColor = 'transparent'
        element.style.boxShadow = `0 0 2px #000`
    }
    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
    function setColor(element) {
        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }
    function render() {
        for (let i = 0; i < SQUARES_NUMBER; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.addEventListener('mouseover', () => {
                setColor(square)
            })
            square.addEventListener('mouseleave', () => {
                removeColor(square)
            })
            board.append(square)
        }
    }
    return (
        <>
            {render()}
        </>
    )
}

export default CursorBoard



