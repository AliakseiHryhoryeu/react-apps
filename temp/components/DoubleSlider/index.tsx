import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import slides from './slides.json'

import './DoubleSlider.scss'

export const DoubleSlider: FC = () => {

  const getWindowHeight = () => {
    const { innerHeight: height } = window;
    return height

  }

  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  const [slideConter, setSlideCounter] = useState(0)


  const changeSlideHandlerArrows = (number: number) => {
    setWindowHeight(getWindowHeight())
    if (slideConter + number > slides.slides.length) {
      setSlideCounter(0)
    } else if (slideConter + number < 0) {
      setSlideCounter(slides.slides.length - 1)
    } else {
      setSlideCounter(slideConter + number)
    }
  }

  return (

    <div className="double-container">
      <div
        className="double-sidebar"
        style={{
          top: `-500vh`,
          transform: `translateY(${windowHeight * slideConter}px)`
        }}
      >
        {slides.slides.map(item => {
          return (
            <div
              key={item.id + 'double-sidebar'}
              style={{
                background: item.backgroundColor
              }}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>

      <div
        className="double-main-slide"
        style={{
          transform: `translateY(-${windowHeight * slideConter}px)`
        }}
      >
        {slides.slides.map(item => {
          return (
            <div
              key={item.id + 'double-main-slide'}
              style={{
                backgroundImage: `url('${item.imageUrl}')`
              }}
            >
            </div>
          )
        })}
      </div>

      <div className="double-controls">
        <button
          className="double-button double-down-button"
          onClick={() => changeSlideHandlerArrows(-1)}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button
          className="double-button double-up-button"
          onClick={() => changeSlideHandlerArrows(1)}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>

  )
}
