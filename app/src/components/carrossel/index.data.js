import Componente from '../../assets/img/componente.jpg'
import Test from '../../assets/img/test.jpg'

export const TextDevWeb = () => (
  <ul>
    <li>O que é Desenvolvimento Web?</li>
    <li>Quais as vantagens dos sistemas web?</li>
    <li>O que faz uma pessoa Desenvolvedora Web?</li>
    <li>Principais linguagens utilizadas no Desenvolvimento Web</li>
  </ul>
)

export const TextTecs = () => (
  <ul>
    <li>HTML</li>
    <li>CSS3</li>
    <li>Javascript</li>
  </ul>
)

export const TextReact = () => (
  <ul>
    <li>Em alta no mercado</li>
    <li>Componentes reutilizáveis</li>
    <li>Flexibilidade</li>
    <li>Amigo do React Native</li>
    <li>Comunidade gigante</li>
  </ul>
)

export const TextGap = () => (
  <ul>
    <li>Props</li>
    <li>State</li>
    <li>Virtual DOM</li>
    <li>Extensão JSX</li>
  </ul>
)

export const TextPratic = () => (
  <section>
    <article>
      Componente
      <img src={Componente} alt={Componente} />
    </article>
    <hr />
    <article>
      Teste
      <img src={Test} alt={Test} />
    </article>
  </section>
)

export const TextReferences = () => (
  <>
    <p>
      <a href='https://www.alura.com.br/artigos/react-front-end-e-o-mercado#:~:text=O%20React%20%C3%A9%20um%20dos,muito%20mais%20credibilidade%20pra%20ferramenta.'>
        FERREIRA, Gabs; React, front end e o mercado; ALURA 2017; Acesso em 10
        maio 2022.
      </a>
    </p>

    <p>
      <a href='https://medium.com/reactbrasil/mercado-de-trabalho-react-js-97d0cb6663f7'>
        NICHOLAS, Eduardo; Mercado de trabalho com ReactJs. MEDIUM 22 abril
        2018; Acesso em 10 maio 2022.
      </a>
    </p>

    <p>
      <a href='https://tutano.trampos.co/16866-desenvolvedor-front-end-react/'>
        Udacity Brasil; POR QUE UM DESENVOLVEDOR FRONT-END DEVE SABER REACT?;
        s.d.; Acesso em 10 maio 2022.
      </a>
    </p>

    <p>
      <a href='https://kenzie.com.br/blog/react/'>
        ROVEDA, Ugo; REACT: O QUE É, COMO FUNCIONA E PORQUE USAR E COMO
        APRENDER; 16 nov 2020; Acesso em 10 maio 2020.
      </a>
    </p>

    <p>
      <a href='https://dev.to/destro_mas/jest-snapshot-testing-for-react-components-is-useless-is-it-slowly-dying-4cce'>
        TALUKDAR, Shahjada; Jest Snapshot Testing for React Components is
        useless? Is it slowly dying?; 16 nov de 2019; Acesso em 15 maio 2020.
      </a>
    </p>
  </>
)
