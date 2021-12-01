import React, { Fragment } from 'react'
import Slider from './components/Slider'
import img1 from './assets/img/cat-1.jpg';
import img2 from './assets/img/cat-2.jpg';
import img3 from './assets/img/cat-3.jpg';
import img4 from './assets/img/cat-4.jpg';
import img5 from './assets/img/cat-5.jpg';
import img6 from './assets/img/cat-6.jpg';
import img7 from './assets/img/cat-7.jpg';
import img8 from './assets/img/cat-8.jpg';


function App() {
  const sliderDB = [img1,img2,img3,img4,img5,img6,img7,img8]

  return (
    <Fragment >
      <Slider slides={sliderDB} />
    </Fragment>
  );
}

export default App;
