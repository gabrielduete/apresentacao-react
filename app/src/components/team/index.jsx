import * as S from './styles'
import Container from '../Container'
import Athy from '../../assets/img/ath.jpg'
import Gabriel from '../../assets/img/gabriel.png'
import Maos from '../../assets/img/maosdadas.png'

const Team = () => (
  <Container>
    <S.Wrapper>
      <S.Title>EQUIPE:</S.Title>
      <S.WrapperContent>
        <S.Picture src={Gabriel} alt='Gabriel' />
        <S.Text>Gabriel Duete</S.Text>
      </S.WrapperContent>
      <S.Picture src={Maos} alt={Maos} />
      <S.WrapperContent>
        <S.Picture src={Athy} alt='Athy' />
        <S.Text>Athyson Lopes</S.Text>
      </S.WrapperContent>
    </S.Wrapper>
  </Container>
)

export default Team
