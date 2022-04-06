import React from 'react'
import FullText from '../pageFullText/index'
import Carousel from 'react-elastic-carousel'

const CarouselSlide = () => (
  <Carousel
    itemsToShow={1}
    showArrows={false}
    easing="cubic-bezier(1,.15,.55,1.54)"
    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
    transitionMs={700}
  >
    <FullText
      title='A IMPORTÂNCIA DO REACT'
    />
    <p>Então, para começar....</p>
  </Carousel >
)

export default CarouselSlide