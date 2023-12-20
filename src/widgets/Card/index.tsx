import { Data } from '@shared/types'
import { Address, Contacts, Div, Flag } from './style'

export const Card = (item: Data) => {
  return (
    <Div>
      <h2>{item.name}</h2>

      <Contacts>
        <span>{item.phone}</span>
        <span>{item.email}</span>
      </Contacts>

      <Address>{item.address}</Address>

      <Flag dangerouslySetInnerHTML={{ __html: item.flag }} />
    </Div>
  )
}
