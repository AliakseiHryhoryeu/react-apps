import React, { Fragment } from 'react'
import Slider from './components/Slider'
import { SliderData } from './components/Slider/SliderData'

function App() {
  return (
    <Fragment >
      <Slider slides={SliderData} />
    </Fragment>
  );
}

export default App;
