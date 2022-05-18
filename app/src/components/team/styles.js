import styled from 'styled-components'

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  grid-area: title;
  font-size: var(--font-title);
`

export const WrapperContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Picture = styled.img`
  width: 200px;
`

export const Text = styled.p`
  font-size: 1.5em;
`
