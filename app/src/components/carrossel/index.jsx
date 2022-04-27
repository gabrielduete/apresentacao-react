import Carousel from 'react-elastic-carousel'
import FullText from '../pageFullText/index'
import PageImg from '../pageImg'
import DevWeb from '../../assets/img/undraw_Internet_on_the_go_re_vben.png'

const TextDevWeb = () => (
  <ul>
    <li>O que é Desenvolvimento Web?</li>
    <li>Quais as vantagens dos sistemas web?</li>
    <li>O que faz uma pessoa Desenvolvedora Web?</li>
    <li>Principais linguagens utilizadas no Desenvolvimento Web</li>
  </ul>
)

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
      <PageImg
        title='DESENVOLVIMENTO'
        purpleText='WEB'
        text={TextDevWeb()}
        srcImg={DevWeb}
      />
    </Carousel>
  )
}

export default CarouselSlide
