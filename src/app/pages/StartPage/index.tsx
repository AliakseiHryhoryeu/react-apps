import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import cardBg from 'assets/img/startpage/card-bg.png'
import doubleBg from 'assets/img/startpage/double-bg.png'
import sliderBg from 'assets/img/startpage/slider-bg.png'

import './StartPage.scss'

export const StartPage: FC = () => {
    const navigate = useNavigate()
    return (
        <section className='start'>
            <div
                className="start-item"
                onClick={() => { navigate('/slider') }}
                style={{
                    backgroundImage: `url(${sliderBg})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                }}
            >
                <h2>Slider</h2>
            </div>
            <div
                className="start-item"
                style={{
                    backgroundImage: `url(${doubleBg})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                }}
                onClick={() => { navigate('/double') }}
            >
                <h2>Card Slider</h2>
            </div>
            <div
                className="start-item"
                style={{
                    backgroundImage: `url(${cardBg})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                }}
                onClick={() => { navigate('/card') }}
            >
                <h2>Double Slider</h2>
            </div>
        </section>
    )
}
