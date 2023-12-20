import { Title } from '@entities'
import { Starting } from '@widgets'
import { useMediaQuery } from 'react-responsive'
import { Div } from './style'

export const StartingPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 940px)' })

  return (
    <Div>
      <Title />
      {isMobile && (
        <img width={'100%'} src="/images/World Map.svg" alt="world" />
      )}
      <Starting />
    </Div>
  )
}
