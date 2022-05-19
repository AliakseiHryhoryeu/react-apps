import React, {FC} from 'react'
import dynamic from 'next/dynamic'

const AimGamePage:FC = () => {
  const AimGame = dynamic(() => import('src/components/AimGame'), { ssr: false })

  return <AimGame />
}

export default AimGamePage