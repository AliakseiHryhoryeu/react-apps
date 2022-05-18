import React, {FC} from 'react'
import dynamic from 'next/dynamic'

const CursorBoardPage:FC = () => {
  const CursorBoard = dynamic(() => import('src/components/CursorBoard'), { ssr: false })

  return <CursorBoard />
}

export default CursorBoardPage