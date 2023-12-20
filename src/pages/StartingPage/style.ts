import { gap } from '@shared/cssConstants'

import styled from 'styled-components'

export const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 940px) {
    gap: calc(2 * ${gap});
  }
`
