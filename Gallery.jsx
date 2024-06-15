import React from 'react'
import Image1 from './Assets/image1.png';
import Image2 from './Assets/image2.png';
import Image3 from './Assets/image3.png';
import Image4 from './Assets/image4.png';
import Image5 from './Assets/image5.png';
import Image6 from './Assets/image6.png';
import Image7 from './Assets/image7.png';
import Image8 from './Assets/image8.png';
import Image9 from './Assets/image9.png';
import Image10 from './Assets/image10.png';
import './Gallery.css'; 

function Gallery() {
  return (
    <div>
      <img src={Image1} alt="" className='image'/>
      <img src={Image2} alt="" className='image'/>
      <img src={Image3} alt="" className='image'/>
      <img src={Image4} alt="" className='image'/>
      <img src={Image5} alt="" className='image'/>
      <img src={Image6} alt="" className='image'/>
      <img src={Image7} alt="" className='image'/>
      <img src={Image8} alt="" className='image'/>
      <img src={Image9} alt="" className='image'/>
      <img src={Image10} alt="" className='image'/>

    </div>
  )
}

export default Gallery