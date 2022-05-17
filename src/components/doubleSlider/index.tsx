import React, { useState, useRef, FC, useEffect } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import styles from 'src/styles/DoubleSlider.module.scss'
import slides from './slides.json'


const DoubleSlider: FC = () => {

    const mainBlock = useRef<HTMLDivElement>(null)
    const getWindowHeight = () => {
        if (mainBlock.current !== null) {
            console.log(mainBlock.current.clientHeight)
            return mainBlock.current.clientHeight
        } else {
            const { innerHeight: height } = window
            console.log(height)
            return height
        }
    }
    const [windowHeight, setWindowHeight] = useState(getWindowHeight());
    const [slideConter, setSlideCounter] = useState(0)

    const changeSlideHandlerArrows = (number: number) => {
        setWindowHeight(getWindowHeight())
        if (slideConter + number > slides.slides.length-1) {
            setSlideCounter(0)
        } else if (slideConter + number < 0) {
            setSlideCounter(slides.slides.length - 1)
        } else {
            setSlideCounter(slideConter + number)
        }
    }
    useEffect(()=>{
        changeSlideHandlerArrows(0)
        },[])

    return (
        <div className={styles.doubleContainer} ref={mainBlock} >
            <div
                className={styles.doubleSidebar}
                style={{
                    top: `-${(slides.slides.length-1) * windowHeight}px`,
                    transform: `translateY(${windowHeight * slideConter}px)`
                }}
            >
                {slides.slides.map(item => {
                    return (
                        <div
                            key={item.id + 'doubleSidebar'}
                            style={{
                                background: item.backgroundColor
                            }}
                            className={styles.doubleSidebarItem}
                        >

                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>

            <div
                className={styles.doubleMainSlide}
                style={{
                    transform: `translateY(-${windowHeight * slideConter}px)`
                }}
            >
                {slides.slides.map(item => {
                    return (
                        <div
                            key={item.id + 'doubleMainSlide'}
                            style={{
                                backgroundImage: `url('${item.imageUrl}')`
                            }}
                            className={styles.doubleMainSlideItem}
                        >
                        </div>
                    )
                })}
            </div>

            <div className={styles.doubleControls}>
                <button
                    className={classNames(styles.doubleButton, styles.doubleDownButton)}
                    onClick={() => changeSlideHandlerArrows(-1)}
                >
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <button
                    className={classNames(styles.doubleButton, styles.doubleUpButton)}
                    onClick={() => changeSlideHandlerArrows(1)}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </div>
    )
}

export default DoubleSlider