import React from 'react'
import Slider from 'react-slick'
import CardLugaresDep from './CardLugaresDep';

export default function SliderLugares(){

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide:0,
  };

  return (
    <div className='mt-8 p-2'>
                  <Slider {...settings}>
                        {/*ACÁ VAN LAS CARDS DE LOS LUGARES Y SUS NOMBRES */}
                  </Slider>
                  
              </div>
  )
}
