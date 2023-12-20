import { blackColor } from '@shared/cssConstants'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'DMSans';
    src: url('/fonts/DM_Sans/DMSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
@font-face {
    font-family: 'DMSans';
    src: url('/fonts/DM_Sans/DMSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  * {
    font-family: 'DMSans';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${blackColor}
  }

  main {
    max-width: 1080px;
    min-width: 0;
    margin: 116px auto;
  }
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <GlobalStyle />
    </>
  )
}
