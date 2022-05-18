import React, { useState } from 'react'
import styles from 'src/styles/AimGame.module.scss'

const AimGame = () => {
  const gameTime = [
    { id: 1, time: 10 },
    { id: 2, time: 20 },
    { id: 3, time: 30 },
    { id: 4, time: 40 },
    { id: 5, time: 50 },
  ]
  const [time, setTime] = useState(0)
  const [score, setScrore] = useState(0)

  return (
    <section className={styles.gameContent}>
      <div className={styles.screen}>
        <h1 className={styles.title}>Aim Game</h1>
        <a href="#" className={styles.start} id='start'>Начать игру</a>
      </div>

      <div className={styles.screen}>
        <h1 className={styles.title}>Выберите время</h1>
        <ul className={styles.timeList}>
          {gameTime.map(({ id, time }) => (
            <>
              <li key={id}>
                <button className={styles.timeBtn} data-time={time}>
                  {time} сек
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className={styles.screen}>
        <h3>Осталось
          <span id="time">00:00</span>
        </h3>
        <div className={styles.board} id="board"></div>
      </div>
    </section>
  )
}

export default AimGame