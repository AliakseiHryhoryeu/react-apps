import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const DoubleSliderPage: FC = () => {
	const DoubSlider = dynamic(() => import('src/components/DoubleSlider/'), {
		ssr: false,
	})
	return <DoubSlider />
}

export default DoubleSliderPage
