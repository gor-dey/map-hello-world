import { blackColor, darkGrayColor } from '@shared/cssConstants'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const H1 = styled.h1`
  color: ${blackColor};
  font-weight: 700;
  font-size: 48px;
`
const P = styled.p`
  color: ${darkGrayColor};
  font-weight: 400;
  font-size: 18px;
`

export const Title = () => {
  return (
    <Div>
      <H1>Hello World</H1>
      <P>Always ready to meet with you.</P>
    </Div>
  )
}
