import { lightGrayColor } from '@shared/cssConstants'
import styled from 'styled-components'

const padding = '24px'

const Div = styled.div`
  height: 208px;
  width: 100%;
  border-radius: 20px;
  padding: ${padding};
  box-shadow: 0px 0px 40px 0px #2c3b4026;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  position: relative;
`
const Flag = styled.div`
  width: 40px;
  height: 40px;
  background-color: tomato;
  border-radius: 10px;
  position: absolute;
  right: ${padding};
`

const Name = styled.span`
  font-size: 28px;
  font-weight: 700;
`
const Contacts = styled.span`
  font-size: 18px;
  font-weight: 400;

  display: flex;
  flex-direction: column;
`
const Address = styled.span`
  color: ${lightGrayColor};
`

export const Card = () => {
  return (
    <Div>
      <Name>Damietta</Name>

      <Contacts>
        <span>+20 0219033</span>
        <span>alexbank@damietta.com</span>
      </Contacts>

      <Address>
        3 Al Togari, Qism Damietta, Damietta, Damietta Governorate 34511, Egypt
      </Address>

      <Flag />
    </Div>
  )
}
