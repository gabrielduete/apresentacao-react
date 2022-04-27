import Proptypes from 'prop-types'
import Container from '../Container'
import * as S from './styles'

const PageImg = ({ title, text, purpleText, srcImg }) => (
  <Container>
    <S.Wrapper>
      <S.Title>
        {title} <span>{purpleText}</span>
      </S.Title>
      <S.Text>{text}</S.Text>
      <S.Image src={srcImg} alt={srcImg} />
    </S.Wrapper>
  </Container>
)

PageImg.prototype = {
  title: Proptypes.string.isRequired,
  text: Proptypes.node.isRequired,
  purpleText: Proptypes.string,
  srcImg: Proptypes.string.isRequired,
}

export default PageImg
