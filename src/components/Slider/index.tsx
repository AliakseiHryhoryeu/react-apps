import React, { useState, FC } from 'react'

import './Slider.scss'

import arrowPrev from '@img/arrow-prev-white.png'
import arrowNext from '@img/arrow-next-white.png'

import img1 from '@img/cat-1.jpg';
import img2 from '@img/cat-2.jpg';
import img3 from '@img/cat-3.jpg';
import img4 from '@img/cat-4.jpg';
import img5 from '@img/cat-5.jpg';
import img6 from '@img/cat-6.jpg';
import img7 from '@img/cat-7.jpg';
import img8 from '@img/cat-8.jpg';


const Slider:FC=()=> {

    const slides:string[] = [img1, img2, img3, img4, img5, img6, img7, img8]

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
                                <img src={slide} className='slide__item' onClick={nextSlide} />
                            )}
                        </div>
                    );
                })}

            </div>
            <img src={arrowNext} alt="nextSlide" className='arrow arrow__next' onClick={nextSlide} />

        </section>

    )
}

export default Slider

