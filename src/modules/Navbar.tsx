import styled from 'styled-components'
import { Logo } from '@sharedComponents/Logo'
import { User } from '@sharedComponents/Icons'
import colors from '../styles/Colors'
import { Button } from '@sharedComponents/Buttons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Header = styled.header`
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
            color: ${colors.gray[400]};
            font-weight: 700;
            font: 12px/16px 'Montserrat Alternates', sans-serif;
            text-decoration: none;
            cursor: pointer;

            :hover {
              color: ${colors.primary[600]};
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
      color: ${colors.gray[400]};
      width: 24px;
      cursor: pointer;
      height: 24px;
      background: none;
      border: none;
      position: relative;

      span {
        background: ${colors.primary[600]};
        color: ${colors.white};
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
        color: ${colors.primary[600]};
        transition: 0.5s ease-in-out color;
      }
    }
  }
`

const Navbar: React.FC = () => {
  return (
    <Header>
      <div className="userNav">
        <Link to={'/'}>
          <Logo />
        </Link>
        <ul>
          <li>
            <Link to={'/category/paisajes'}>Paisajes</Link>
          </li>
          <li>
            <Link to={'/category/alimentos'}>Alimentos</Link>
          </li>
          <li>
            <Link to={'/category/arquitectura'}>Arquitectura</Link>
          </li>
          <li>
            <Link to={'/category/publicitaria'}>Publicitaria</Link>
          </li>
          <li>
            <Link to={'/category/retrato'}>Retrato</Link>
          </li>
          <li>
            <Link to={'/category/macro'}>Macro</Link>
          </li>
        </ul>
      </div>
      <div className="userActions">
        <button className="buttonSvg">
          <CartWidget quantity={1} />
        </button>
        <button className="buttonSvg">
          <User />
        </button>
        <Button>Subir contenido</Button>
      </div>
    </Header>
  )
}

export default Navbar
