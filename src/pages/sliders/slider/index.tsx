import React, { useState } from 'react'
import classNames from 'classnames'
import styles from 'src/styles/Slider.module.scss'

function Slider() {

  const slides = [
    { id: 1, image: '/static/slider/cat-1.jpg' },
    { id: 2, image: '/static/slider/cat-2.jpg' },
    { id: 3, image: '/static/slider/cat-3.jpg' },
    { id: 4, image: '/static/slider/cat-4.jpg' },
    { id: 5, image: '/static/slider/cat-5.jpg' },
    { id: 6, image: '/static/slider/cat-6.jpg' },
    { id: 7, image: '/static/slider/cat-7.jpg' },
    { id: 8, image: '/static/slider/cat-8.jpg' },
  ]
  const arrows = {
    arrowNext:'/static/slider/arrow-next-white.png',
    arrowPrev:'/static/slider/arrow-prev-white.png',
  }
  const [current, setCurrent] = useState(0)
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }



  return (
    <div className={styles.slider}>
      <img src={arrows.arrowPrev} alt="prevSlide" className={classNames(styles.arrow, styles.arrow__prev)} onClick={prevSlide} />
      <div className="slides">
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} className='slide__item' onClick={nextSlide} />
              )}
            </div>
          )
        })}

      </div>
      <img src={arrows.arrowNext} alt="nextSlide" className={classNames(styles.arrow, styles.arrow__next)} onClick={nextSlide} />

    </div>
  )
}

export default Slider

