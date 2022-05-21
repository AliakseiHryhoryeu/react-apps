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

    const [globalTime, setGlobalTime] = useState(20)
    const [visibleTime, setVisibleTime] = useState(`00:00`)
    const [score, setScore] = useState(0)

    const [welcomeScreenActive, setWelcomeScreenActive] = useState(false)
    const [timeScreenActive, setTimeScreenActive] = useState(false)

    const board = useRef(document.createElement("div"))
    const timeEl = useRef(document.createElement('span'))



    function startGame(time: number) {
        setGlobalTime(time)
        createRandomCircle()
        setInterval(() => {
            console.log('work')
            decreaseTime()
        }, 1000);
    }

    function decreaseTime() {
        if (globalTime === 0) {
            finishGame()
        } else {
            setGlobalTime(globalTime => globalTime - 1)
            if (globalTime < 10) {
                setVisibleTime(globalTime => `00:0${globalTime}`)
                timeEl.current.style.color = 'red'
            }
        }
    }


    function finishGame() {
        board.current.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1><br>`;
        board.current.innerHTML += '<a href="" class="start">Заново</a>';
        // timeEl.parentElement.style.opacity = '0';
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
        const x = circle.style.left = `${getRandomInt(3, 95)}%`;
        const y = circle.style.top = `${getRandomInt(5, 95)}%`;

        circle.style.width = size;
        circle.style.height = size;


        setColor(circle);
        circle.addEventListener('click', event => {
            setScore(score + 1)
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
                                    startGame(time)
                                    setTimeScreenActive(!timeScreenActive)
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
                    <span ref={timeEl} >{visibleTime}</span>
                    <span >{globalTime}</span>
                </h3>
                <div ref={board} className={styles.board}>

                </div>
            </div>
        </section>
    )
}

export default AimGame






// startBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     screens[0].classList.add('up');
// });

// timeList.addEventListener('click', (event) => {
//     if (event.target.classList.contains('time-btn')) {
//         time = parseInt(event.target.getAttribute('data-time'));
//         screens[1].classList.add('up');
//         startGame();
//     }
// });

// board.addEventListener('click', event => {
//     if (event.target.classList.contains('circle')) {
//         score++;
//         setTimeout(event.target.remove(), 1000);
//         createRandomCircle();
//     }
// });


// function startGame() {
//     setInterval(decreaseTime, 1000);
//     createRandomCircle();
//     setTime(time);
// }

// function decreaseTime() {
//     if (time === 0) {
//         finishGame();
//     } else {
//         let curent = --time;
//         if (curent < 10) {
//             curent = `0${curent}`;
//             timeEl.style.color = 'red';
//         }
//         setTime(curent);
//     }
// }

// function setTime(value) {
//     return timeEl.innerHTML = `00:${value}`;
// }

// function finishGame() {
//     board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1><br>`;
//     board.innerHTML += '<a href="" class="start">Заново</a>';
//     timeEl.parentElement.style.opacity = '0';

// }


// function setColor(elem) {
//     let i = 1;
//     let r = getRandomInt(min = 0, max = 255), g = getRandomInt(min = 0, max = 255), b = getRandomInt(min = 0, max = 255);
//     let color = `rgb(${r},${g},${b})`;
//     return elem.style.background = color, elem.style.boxShadow = `0 0 10px ${color}, 0 0 25px ${color}`;

// }

// function getRandomInt(min = 25, max = 45) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function fly(elem) {
//     elem.style.transform = `translateY(${getRandomInt(-100, 100)}px)`
//     elem.style.transform = `translateX(-${getRandomInt(-100, 100)}px)`
// }
