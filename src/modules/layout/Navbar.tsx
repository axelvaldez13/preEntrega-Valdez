import { Logo } from '@sharedComponents/Logo'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { Header } from '@moduleStyled/Layout'

const Navbar: React.FC = () => {
  return (
    <Header>
      <Link to={'/home'} className="logo">
        <Logo />
      </Link>
      <ul className="userNav">
        <li>
          <Link to={'/category'}>Galeria</Link>
        </li>
        <li>
          <Link to={'/category/paisaje'}>Paisajes</Link>
        </li>
        <li>
          <Link to={'/category/arquitectura'}>Arquitectura</Link>
        </li>
        <li>
          <Link to={'/category/publicitaria'}>Publicitaria</Link>
        </li>
      </ul>
      <div className="userActions">
        <Link to={'/cart'} className="buttonSvg">
          <CartWidget />
        </Link>
      </div>
    </Header>
  )
}

export default Navbar
