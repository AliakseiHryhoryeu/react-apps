import React, { FC, useState } from 'react'
import classNames from 'classnames'

import slides from './carditems.json'

import arrowLeft from 'assets/img/arrow-prev-white.png'
import arrowRight from 'assets/img/arrow-next-white.png'

import './CardSlider.scss'

export const CardSlider: FC = () => {

  const [slideConter, setSlideCounter] = useState(1)

  const changeSlideHandlerArrows = (number: number) => {
    if (slideConter + number > slides.carditems.length) {
      setSlideCounter(1)
    } else if (slideConter + number < 1) {
      setSlideCounter(slides.carditems.length)
    } else {
      setSlideCounter(slideConter + number)
    }
  }

  return (
    <div className="card-container">
      <div
        className="card-arrows"
        onClick={() => changeSlideHandlerArrows(-1)}
        style={{
          left: 0,
          background: `center / contain no-repeat url("${arrowLeft}")`
        }}
      >
      </div>
      <div
        className="card-arrows"
        onClick={() => changeSlideHandlerArrows(1)}
        style={{
          right: 0,
          background: `center / contain no-repeat url("${arrowRight}")`
        }}
      >
      </div>
      {slides.carditems.map(item => {

        return (
          <div
            className={classNames("card-slide", (item.id === slideConter ? "card-active" : "card-notactive"))}
            style={{
              backgroundImage: `url('${item.imageUrl}')`
            }}
            key={item.id}
            onClick={() => setSlideCounter(item.id)}
          >
            <h3>{item.title}</h3>
          </div>
        )
      })}

    </div>
  )
}