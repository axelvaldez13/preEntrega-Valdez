import styled from 'styled-components'
import theme from '@styles/Theme'
import { Button } from '@sharedComponents/Buttons'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;

  .userNav {
    ul {
      display: none;
    }
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        margin: 0 24px;
        > li {
          margin: 0 8px;
          list-style: none;
          a {
            color: ${theme.color.gray[400]};
            font-weight: 700;
            font: ${theme.font.fontSm};
            text-decoration: none;
            cursor: pointer;

            :hover {
              color: ${theme.color.primary[600]};
              transition: 0.5s ease-in-out color;
            }
          }
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

    .buttonSvg {
      color: ${theme.color.gray[400]};
      width: 24px;
      cursor: pointer;
      height: 24px;
      background: none;
      border: none;
      position: relative;

      span {
        background: ${theme.color.primary[600]};
        color: ${theme.color.white};
        font-weight: 700;
        width: 24px;
        height: 24px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        bottom: 12px;
        left: 12px;
        font: 700 12px/16px 'Montserrat Alternates', sans-serif;
      }
      :hover {
        color: ${theme.color.primary[600]};
        transition: 0.5s ease-in-out color;
      }
    }
  }
`
