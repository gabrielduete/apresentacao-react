import PropTypes from 'prop-types'
import Container from '../Container'
import * as S from './styles'

function FullText({ title, text, purpleText }) {
  return (
    <Container center={true}>
      <S.Wrapper>
        <S.Title>
          {title}
          <span>{purpleText}</span>
        </S.Title>
        <S.Text>{text}</S.Text>
      </S.Wrapper>
    </Container>
  )
}

FullText.propTypes = {
  title: PropTypes.string.isRequired,
  purpleText: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default FullText
