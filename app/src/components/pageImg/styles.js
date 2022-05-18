import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 0.6fr 1.4fr;
  grid-template-areas:
    'title title'
    'text image';
  margin: 30px;
`

export const Title = styled.h1`
  grid-area: title;
  font-size: var(--font-title);
`

export const Text = styled.div`
  grid-area: text;
  font-size: var(--font-medium);
`

export const Image = styled.img`
  grid-area: image;
  align-content: end;
  width: 560px;
`
