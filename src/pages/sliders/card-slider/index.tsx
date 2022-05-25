import React, { FC, useState } from 'react'
import classNames from 'classnames'

import styles from 'src/styles/CardSlider.module.scss'
import slides from './carditems.json'

const CardSlider: FC = () => {
	const arrows = {
		arrowNext: '/static/card-slider/arrow-next-white.png',
		arrowPrev: '/static/card-slider/arrow-prev-white.png',
	}
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
		<div className={styles.cardContainer}>
			<div
				className={styles.cardArrows}
				onClick={() => changeSlideHandlerArrows(-1)}
				style={{
					left: 0,
					background: `center / contain no-repeat url("${arrows.arrowPrev}")`,
				}}
			></div>
			<div
				className={styles.cardArrows}
				onClick={() => changeSlideHandlerArrows(1)}
				style={{
					right: 0,
					background: `center / contain no-repeat url("${arrows.arrowNext}")`,
				}}
			></div>
			{slides.carditems.map(item => {
				return (
					<div
						className={classNames(
							styles.cardSlide,
							item.id === slideConter ? styles.cardActive : styles.cardNotactive
						)}
						style={{
							backgroundImage: `url('${item.imageUrl}')`,
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

export default CardSlider
