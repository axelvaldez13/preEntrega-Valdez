import styled from 'styled-components'
import theme from '@styles/Theme'
import { Paragraph } from '@sharedComponents/Fonts'
import { Button } from '@sharedComponents/Buttons'

interface ILayout {
  flexDirection?: 'row' | 'column'
}

export const Layout = styled.div<ILayout>`
  display: flex;
  overflow: scroll;
  flex-direction: ${props => props.flexDirection ?? 'column'};
  flex: 1;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  a {
    text-decoration: none;
  }

  .cardInfoContainer {
    display: flex;
    justify-content: space-between;
    .cardName {
      display: flex;
      flex-direction: column;
    }
  }
`

interface ICardImage {
  backgroundImage: string | number
}

export const CardImage = styled.div<ICardImage>`
  background: url(${props => props.backgroundImage}) center center / cover;
  width: 100%;
  height: 12rem;
  border-radius: 4px;
  background-position: center center;
  margin-bottom: 12px;
  display: flex;

  ${Paragraph} {
    margin: 8px;
    background: ${theme.color.primary[600]};
    padding: 8px;
    color: #fff;
    font: ${theme.font.fontSm};
    border-radius: 4px;
  }
`
export const Badge = styled.div`
  p {
    margin: 8px;
    background: ${theme.color.primary[600]};
    padding: 8px;
    color: #fff;
    font: ${theme.font.fontSm};
    border-radius: 4px;
  }
`
export const FooterView = styled.footer`
  background: ${theme.color.gray[900]};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  .footerLogo {
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
  }

  .footerCopyright {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .firstContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

    a {
      text-decoration: none;
      color: ${theme.color.gray[600]};
      :hover {
        color: ${theme.color.gray[400]};
        transition: 0.5s ease-in-out color;
      }
    }
    p {
      padding: 0.2rem 0;
    }

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(5, 4fr);
    }
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
  }

  hr {
    margin: 1rem 0;
    border: 0.5px solid ${theme.color.gray[800]};
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 0.5px solid ${theme.color.gray[600]};

  .logo {
    display: flex;
    align-tems: center;
  }

  .userNav {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      list-style: none;
      font: ${theme.font.fontSm};
      font-weight: 600;

      > li > a {
        display: flex;
        cursor: pointer;
        text-decoration: none;
        color: ${theme.color.gray[400]};
        margin: 0 0.5rem;

        :hover {
          color: ${theme.color.primary[400]};
          transition: 0.5s ease-in-out color;
        }
      }
    }
  }

  .userActions {
    display: flex;
    align-items: center;

    ${Button} {
      display: none;
      @media screen and (min-width: 768px) {
        display: flex;
      }
    }

    > button {
      margin-left: 16px;
    }

    .unLogged {
      display: flex;
      align-items: center;
      list-style: none;
      font: ${theme.font.fontSm};
      font-weight: 600;

      .primary {
        color: ${theme.color.primary[400]};
      }

      > li > a {
        display: flex;
        cursor: pointer;
        color: ${theme.color.gray[400]};
        margin: 0 0.5rem;

        :hover {
          color: ${theme.color.primary[400]};
          transition: 0.5s ease-in-out color;
        }
      }
    }

    .buttonSvg {
      color: ${theme.color.gray[400]};
      width: 24px;
      cursor: pointer;
      height: 24px;
      background: none;
      border: none;
      position: relative;

      :hover {
        color: ${theme.color.primary[400]};
        transition: 0.5s ease-in-out color;
      }
    }
  }
`
