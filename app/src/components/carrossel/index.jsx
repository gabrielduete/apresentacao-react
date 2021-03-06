import Carousel from 'react-elastic-carousel'
import FullText from '../pageFullText/index'
import PageImg from '../pageImg'
import Team from '../team'
import DevWeb from '../../assets/img/undraw_Internet_on_the_go_re_vben.png'
import Tecs from '../../assets/img/undraw_Static_website_re_x70h.png'
import TecsJs from '../../assets/img/htmlcssjs.png'
import Fb from '../../assets/img/fb.png'
import ReactImg from '../../assets/img/undraw_react_y7wq.png'
import Dev from '../../assets/img/undraw_version_control_re_mg66.png'
import Jest from '../../assets/img/jest.png'
import {
  TextDevWeb,
  TextTecs,
  TextReact,
  TextGap,
  TextPratic,
  TextReferences,
} from './index.data'

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
            FAMOSO <span>JAVASCRIPT</span>
          </>
        }
        padding={true}
        text='JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). Saiba mais sobre o JavaScript.'
      />
      <FullText
        title={
          <>
            ENTENDENDO O <span>DOM</span>
          </>
        }
        padding={true}
        text='O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.'
      />
      <PageImg
        title='HTML, CSS & JAVASCRIPT'
        srcImg={TecsJs}
        text='O HTML é o esqueleto, composto dos ossos que o sustenta. O CSS é a pele, cabelo e roupas, criando o visual que realmente enxergamos quando olhamos para alguma pessoa. E por fim, o Javascript é o músculo, que dá movimento ao corpo.'
      />
      <PageImg
        title={
          <>
            DE ONDE VEIO O <span>REACT?</span>
          </>
        }
        srcImg={Fb}
        text='Criado pelo time do Facebook, com intuito de sincronizar todas os estados que estão acontecendo na tela simultaneamente. Resolvendo o problema de comunicação com os componentes da tela de maneira sincronizada e fácil de manter.  '
      />
      <FullText
        title={
          <>
            ENTRANDO NO <span>REACT</span>
          </>
        }
        padding={true}
        text='React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.'
      />
      <PageImg
        title={
          <>
            PORQUE <span>REACT</span> É TÃO IMPORTANTE?
          </>
        }
        srcImg={ReactImg}
        text={TextReact()}
      />
      <PageImg title='Mais afundo...' srcImg={Dev} text={TextGap()} />
      <PageImg
        title={
          <>
            <span>+</span> Valor de mercado
          </>
        }
        srcImg={Jest}
        text='Podemos introduzir uma estrutura de teste no nosso projeto React, para construir testes unitários dos componentes criados.'
      />
      <FullText title='NA PRATICA' text={TextPratic()} />
      <FullText title='REFERÊNCIAS' padding={true} text={TextReferences()} />
      <Team />
    </Carousel>
  )
}

export default CarouselSlide
