import React from 'react'
import Carousel from 'react-elastic-carousel'
import FullText from '../pageFullText/index'

function CarouselSlide() {
  return (
    <Carousel
      itemsToShow={1}
      showArrows={false}
      easing='cubic-bezier(1,.15,.55,1.54)'
      tiltEasing='cubic-bezier(0.110, 1, 1.000, 0.210)'
      transitionMs={700}
    >
      <FullText
        title='A IMPORTÂNCIA DO '
        purpleText='REACT'
        text='Por Athyrson Lopes & Gabriel Duete'
      />
    </Carousel>
  )
}

export default CarouselSlide
