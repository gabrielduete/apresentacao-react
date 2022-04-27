import Proptypes from 'prop-types'
import Container from '../Container'
import * as S from './styles'

const PageImg = ({ title, text, purpleText, img }) => (
  <Container center={false}>
    <S.Title>
      {title} <span>{purpleText}</span>
    </S.Title>
  </Container>
)

PageImg.prototype = {
  title: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
  purpleText: Proptypes.string,
  img: Proptypes.string.isRequired,
}

export default PageImg
