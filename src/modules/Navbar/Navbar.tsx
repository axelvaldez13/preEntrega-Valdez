import { Logo } from '@sharedComponents/Logo'
import { User } from '@sharedComponents/Icons'
import { Button } from '@sharedComponents/Buttons'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { Header } from './Components'

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
