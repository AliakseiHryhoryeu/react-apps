import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const StartPage: FC = () => {
    return (
        <div className='start'>
            StartPage
            <Link to="/card">Card</Link>
            <Link to="/slider">Slider</Link>

        </div>
    )
}
