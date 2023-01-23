import styled from 'styled-components'
import { Logo } from '../sharedComponents/Logo'
import { ShoppingCart, User } from '../sharedComponents/Icons'
import { Paragraph } from '../sharedComponents/Fonts'
import colors from '../styles/Colors'
import { Button } from '../sharedComponents/Buttons'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;

  .userNav {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      margin: 0 24px;
      > li {
        margin: 0 8px;
        list-style: none;

        ${Paragraph} {
          color: ${colors.gray[400]};
          font-weight: 700;
          cursor: pointer;

          :hover {
            color: ${colors.primary[600]};
            transition: 0.5s ease-in-out color;
          }
        }
      }
    }
  }

  .userActions {
    display: flex;
    align-items: center;

    > button {
      margin-left: 16px;
    }
    .buttonSvg {
      color: ${colors.gray[400]};
      width: 24px;
      cursor: pointer;
      height: 24px;
      background: none;
      border: none;

      :hover {
        color: ${colors.primary[600]};
        transition: 0.5s ease-in-out color;
      }
    }
  }
`

export const Navbar: React.FC = () => {
  return (
    <Header>
      <div className="userNav">
        <Logo />
        <ul>
          <li>
            <Paragraph>Categorias</Paragraph>
          </li>
          <li>
            <Paragraph>Sobre nosotros</Paragraph>
          </li>
          <li>
            <Paragraph>Contactanos</Paragraph>
          </li>
        </ul>
      </div>
      <div className="userActions">
        <button className="buttonSvg">
          <ShoppingCart />
        </button>
        <button className="buttonSvg">
          <User />
        </button>
        <Button>Subir contenido</Button>
      </div>
    </Header>
  )
}
