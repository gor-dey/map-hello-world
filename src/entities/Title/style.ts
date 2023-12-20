import { darkGrayColor, gap } from '@shared/cssConstants'
import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gap};
`

export const Span = styled.span`
  color: ${darkGrayColor};
`
