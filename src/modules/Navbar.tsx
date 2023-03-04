import { Logo } from '@sharedComponents/Logo'
import { User } from '@sharedComponents/Icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Header } from '@moduleStyled//NavbarStyled'

const Navbar: React.FC = () => {
  return (
    <Header>
      <Link to={'/'} className="logo">
        <Logo />
      </Link>
      <ul className="userNav">
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
      </ul>
      <div className="userActions">
        <button className="buttonSvg">
          <CartWidget quantity={1} />
        </button>
        <button className="buttonSvg">
          <User />
        </button>
        <ul className="unLogged">
          <li>
            <Link to={'/category/publicitaria'}>Iniciar sesion</Link>
          </li>
          <li>
            <Link to={'/category/publicitaria'} className="primary">
              Registrarme
            </Link>
          </li>
        </ul>
        {/*   <Button>Subir contenido</Button> */}
      </div>
    </Header>
  )
}

export default Navbar
