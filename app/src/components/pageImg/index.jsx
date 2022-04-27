import Proptypes from 'prop-types'
import Container from '../Container'
import * as S from './styles'

const PageImg = ({ title, text, srcImg }) => (
  <Container>
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
      <S.Image src={srcImg} alt={srcImg} />
    </S.Wrapper>
  </Container>
)

PageImg.prototype = {
  title: Proptypes.string.isRequired,
  text: Proptypes.node.isRequired,
  srcImg: Proptypes.string.isRequired,
}

export default PageImg
