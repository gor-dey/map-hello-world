import { gap } from '@shared/cssConstants'

import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: ${gap};

  & > div {
    box-sizing: border-box;
    flex: 1 0 30%;
    min-height: 100px;
  }

  @media screen and (max-width: 940px) {
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: nowrap;

    & > div {
      box-sizing: border-box;
      flex: 1;
    }
  }
`
