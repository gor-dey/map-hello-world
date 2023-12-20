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

  html, body, #root {
  height: 100%;
  margin: 0;
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
    margin: 0 auto;
    height: 100%;
    padding: 10vh 40px;
    font-size: 18px;
    
    @media screen and (max-width: 940px)  {
      font-size: 16px;
      padding: 48px 40px;
    }
  }
  
  h1 {
    color: ${blackColor};
    font-size: 48px;
    @media screen and (max-width: 940px)  {
      font-size: 38px;
    }
  }
  h2 {
    color: ${blackColor};
    font-size: 28px;
    @media screen and (max-width: 940px)  {
      font-size: 20px;
    }
  }
  p, span {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    @media screen and (max-width: 940px)  {
      font-size: 16px;
    }
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
