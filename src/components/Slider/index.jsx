import React, { useState } from 'react'

import './Slider.scss'

import arrowPrev from '../../assets/img/arrow-prev-white.png'
import arrowNext from '../../assets/img/arrow-next-white.png'


export default function Slider({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <img src={arrowPrev} alt="prevSlide" className='arrow arrow__prev' onClick={prevSlide} />
            <div className="slides">
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide} alt='travel image' className='image' onClick={nextSlide} />
                            )}
                        </div>
                    );
                })}

            </div>
            <img src={arrowNext} alt="nextSlide" className='arrow arrow__next' onClick={nextSlide} />

        </section>

    )
}

