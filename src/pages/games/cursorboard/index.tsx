import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const CursorBoardPage: FC = () => {
	const DynamicComponent = dynamic(
		() => import('src/components/CursorBoard/index'),
		{ ssr: false }
	)

	return <DynamicComponent />
}

export default CursorBoardPage
