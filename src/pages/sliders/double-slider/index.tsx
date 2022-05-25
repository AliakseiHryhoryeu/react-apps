import React from 'react'
import dynamic from 'next/dynamic'

const DoubleSliderPage = () => {
	const DynamicComponent = dynamic(
		() => import('src/components/DoubleSlider/index'),
		{ ssr: false }
	)
	return <DynamicComponent />
}

export default DoubleSliderPage
