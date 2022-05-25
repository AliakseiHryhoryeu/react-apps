import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const AimGamePage: FC = () => {
	const AimGame = dynamic(() => import('../../../components/AimGame/index'), {
		ssr: false,
	})

	return <AimGame />
}

export default AimGamePage
