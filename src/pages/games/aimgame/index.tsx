import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const AimGamePage: FC = () => {
	const DynamicComponent = dynamic(
		() => import('src/components/AimGame/index'),
		{ ssr: false }
	)

	return <DynamicComponent />
}

export default AimGamePage
