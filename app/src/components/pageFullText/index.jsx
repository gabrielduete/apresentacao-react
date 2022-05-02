import PropTypes from 'prop-types'
import Container from '../Container'
import * as S from './styles'

function FullText({ title, text, padding }) {
  return (
    <Container center={true}>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Text padding={padding}>{text}</S.Text>
      </S.Wrapper>
    </Container>
  )
}

FullText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  padding: PropTypes.bool.isRequired,
}

export default FullText
