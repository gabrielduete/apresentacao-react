import styled from "styled-components"

const ContainerLayout = styled.section`
  width: var(--space-lang);
  height: var(--space-short);
  background: var(--gray-simple);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  -webkit-border-top-left-radius: 50px;
  -webkit-border-bottom-right-radius: 50px;
  -moz-border-radius-topleft: 50px;
  -moz-border-radius-bottomright: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;

  display: ${props => props.display};
  justify-content: center;
`

export default ContainerLayout