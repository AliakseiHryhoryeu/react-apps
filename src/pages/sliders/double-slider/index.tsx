import dynamic from 'next/dynamic'
import React, { FC } from 'react'


const DoubleSliderPage: FC = () => {

  const DoubSlider = dynamic(() => import('src/components/doubleSlider'), { ssr: false })
  return <DoubSlider />
}

export default DoubleSliderPage