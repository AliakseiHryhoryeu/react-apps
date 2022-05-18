import React, { FC, useEffect, useRef } from 'react'
import styles from 'src/styles/CursorBoard.module.scss'


const CursorBoard: FC = () => {
    const board = useRef(document.createElement("div"))
    const container = useRef(document.createElement("div"))
    const squareArr = useRef([document.createElement("div")])
    squareArr.current = []
    const colors = [
        { id: 1, color: '#fbf2eb' },
        { id: 2, color: '#2e5e84' },
        { id: 3, color: '#bbd70b' },
        { id: 4, color: '#fa9705' },
        { id: 5, color: '#d7beac' },
    ]
    // const [screenWidth, setScreenWidth] = useState(100)
    const SQUARES_NUMBER = (500 * 500) / (50 * 50)

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
    const createBox = () => {
        let response = []
        for (let i = 0; i < SQUARES_NUMBER; i++) {
            const temp = <div key={i} ref={element => { element ? addToRefs(element) : '' }} className={styles.square}></div>
            response.push(temp)
        }

        return response
    }

    const addToRefs = (element: HTMLDivElement) => {
        if (element && !squareArr.current.includes(element)) {
            squareArr.current.push(element)
        }
    }

    useEffect(() => {
        squareArr.current.map(item => (
            item.addEventListener('mouseover', () => {
                const color = getRandomColor()
                item.style.backgroundColor = color ? color.color : '#d7beac'
                item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
            })
        ))
        squareArr.current.map(item => (
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent'
                item.style.boxShadow = `0 0 2px #000`
            })
        ))
    }, [])


    return (
        <>
            <div ref={board} className={styles.board}>
                <div ref={container} className={styles.container}>
                    {createBox()}
                </div>
            </div>

        </>
    )
}

export default CursorBoard
