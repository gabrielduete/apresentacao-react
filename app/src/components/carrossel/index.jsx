import Carousel from 'react-elastic-carousel'
import FullText from '../pageFullText/index'
import PageImg from '../pageImg'
import DevWeb from '../../assets/img/undraw_Internet_on_the_go_re_vben.png'
import Tecs from '../../assets/img/undraw_Static_website_re_x70h.png'
import { TextDevWeb, TextTecs } from './index.data'

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
        title={
          <>
            A IMPORTÂNCIA DO <span>REACT</span>
          </>
        }
        text='Por Athyrson Lopes & Gabriel Duete'
      />
      <PageImg
        title={
          <>
            DESENVOLVIMENTO <span>WEB</span>
          </>
        }
        text={TextDevWeb()}
        srcImg={DevWeb}
      />
      <PageImg
        title={
          <>
            PRINCIPAIS <span>TECNOLOGIAS</span>
          </>
        }
        text={TextTecs()}
        srcImg={Tecs}
      />
      <FullText
        title={
          <>
            ENTENDENDO O <span>DOM</span>
          </>
        }
        text='....'
      />
    </Carousel>
  )
}

export default CarouselSlide
