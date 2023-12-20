import { Data } from '@shared/types'
import { data } from '@shared/utils'
import { Card } from '@widgets'
import { Flex } from './style'

export const CardsLine = () => {
  return (
    <Flex>
      {data.map((item: Data, index) => {
        return (
          <div key={index}>
            <Card {...item} />
          </div>
        )
      })}
    </Flex>
  )
}
