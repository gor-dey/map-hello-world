import { lightGrayColor } from '@shared/cssConstants'
import styled from 'styled-components'

const padding = '24px'

export const Div = styled.div`
  height: 208px;
  width: 100%;
  border-radius: 20px;
  padding: ${padding};
  box-shadow: 0px 0px 40px 0px #2c3b4026;
  z-index: 1;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  position: relative;
`
export const Flag = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  right: ${padding};
`

export const Contacts = styled.span`
  font-size: 18px;
  font-weight: 400;

  display: flex;
  flex-direction: column;
`
export const Address = styled.span`
  color: ${lightGrayColor};
`
