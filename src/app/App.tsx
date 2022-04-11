import React, { FC } from 'react'
import { Routes, Route } from "react-router-dom"

import { StartPage, Page404, SliderPage, DoubleSliderPage, CardSliderPage } from 'app/pages'

export const App: FC = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<StartPage />} />

        <Route path="/slider" element={<SliderPage />} />
        <Route path="/double" element={<DoubleSliderPage />} />
        <Route path="/card" element={<CardSliderPage />} />

        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  )
}
