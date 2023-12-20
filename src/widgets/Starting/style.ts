import styled from 'styled-components'

export const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('/images/World Map.svg');
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;

  @media screen and (max-width: 940px) {
    background-image: none;
    display: block;
  }
`
