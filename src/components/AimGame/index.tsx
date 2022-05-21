import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import styles from 'src/styles/AimGame.module.scss'


const AimGame = () => {
    const gameTime = [
        { id: 1, time: 10 },
        { id: 2, time: 20 },
        { id: 3, time: 30 },
        { id: 4, time: 40 },
        { id: 5, time: 50 },
    ]

    const [state, setState] = useState({ count: 999, score: 0, finishGame: false })
    const [welcomeScreenActive, setWelcomeScreenActive] = useState(false)
    const [timeScreenActive, setTimeScreenActive] = useState(false)

    const board = useRef(document.createElement("div"))
    const timeEl = useRef(document.createElement('span'))

    const scircleArr = useRef([document.createElement("div")])
    scircleArr.current = []


    function startGame(time: number) {
        createRandomCircle()
        decreaseTime(time)
    }

    function decreaseTime(counter: number) {
        let newCounter = counter

        setTimeout(() => {
            if (newCounter === 0) {
                setState(prevState => {
                    return { ...prevState, finishGame: true }
                })
            } else {
                setState(prevState => {
                    return { ...prevState, count: prevState.count - 1 }
                })
                decreaseTime(newCounter - 1)
            }
        }, 1000)
    }




    function createRandomCircle() {
        const circle = document.createElement('div');
        const size = `${getRandomInt()}px`;
        circle.style.position = 'absolute'
        circle.style.background = ' linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)'
        circle.style.borderRadius = '50%'
        circle.style.cursor = 'pointer'
        circle.style.transition = 'all 1s linear'
        circle.classList.add('circle');
        circle.style.left = `${getRandomInt(3, 95)}%`; // x
        circle.style.top = `${getRandomInt(5, 95)}%`; // y

        circle.style.width = size;
        circle.style.height = size;


        setColor(circle);
        circle.addEventListener('click', () => {
                setState(prevState => {
                    return { ...prevState, score: prevState.score + 1 }
                })    
                createRandomCircle();
                circle.remove()
        })
        board.current.append(circle);
        setInterval(fly, 300, circle)
        setInterval(setColor, 800, circle)
    }


    function setColor(elem: HTMLDivElement) {
        let r = getRandomInt(0, 255), g = getRandomInt(0, 255), b = getRandomInt(0, 255);
        let color = `rgb(${r},${g},${b})`;
        return elem.style.background = color, elem.style.boxShadow = `0 0 10px ${color}, 0 0 25px ${color}`;

    }
    function fly(elem: HTMLDivElement) {
        elem.style.transform = `translateY(${getRandomInt(-100, 100)}px)`
        elem.style.transform = `translateX(-${getRandomInt(-100, 100)}px)`
    }

    function getRandomInt(min = 25, max = 45) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <section className={styles.gameContent}>
            <div className={classNames(styles.screen,
                (welcomeScreenActive ? styles.up : '')
            )}>
                <h1 className={styles.title}>Aim Game</h1>
                <a
                    onClick={() => { setWelcomeScreenActive(!welcomeScreenActive) }}
                    className={styles.start}>
                    Start game
                </a>
            </div>

            <div className={classNames(styles.screen,
                (timeScreenActive ? styles.up : '')
            )}>
                <h1 className={styles.title}>Выберите время</h1>
                <ul className={styles.timeList}>
                    {gameTime.map(({ id, time }) => (
                        <>
                            <li key={id}
                                onClick={() => {
                                    setState(prevState => { return { ...prevState, count: time } })
                                    setTimeScreenActive(!timeScreenActive)
                                    startGame(time)
                                }}>
                                <button
                                    className={styles.timeBtn}
                                >
                                    {time} сек
                                </button>
                            </li>
                        </>
                    ))}
                </ul>
            </div>

            <div className={styles.screen}>
                <h3 className={styles.screenTitle}>Осталось:
                    <span ref={timeEl} className={classNames(state.count <= 10 ? styles.colorRed : '')}>{state.count} </span>
                    секунд
                </h3>
                <div ref={board} className={styles.board}>
                    <div className={classNames(state.finishGame ? ''  : styles.displayNone)}>
                        <h1>Ваш счет: <span className={styles.primary}>{state.score}</span></h1><br />
                        <a href="" className={styles.start}>Заново</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AimGame