import { MostBoughtContainer } from '@moduleStyled/MostBoughtStyled'
import { HeadingTwo } from '@sharedComponents/Fonts'
import ItemDetail from './ItemDetail'

const listHowWorks = [
  {
    id: 0,
    name: 'Glaciares',
    price: 1234,
    category: 'Macro',
    creator: 'Axel Valdez',
    img: '/calafate-editadas/Calafate-glaciar-01.jpg'
  },
  {
    id: 1,
    name: 'Glaciares',
    category: 'Paisajes',
    price: 1234,
    creator: 'Axel Valdez',
    img: '/calafate-editadas/Calafate-glaciar-02.jpg'
  },
  {
    id: 2,
    name: 'Glaciares',
    category: 'Alimentos',
    price: 1234,
    creator: 'Axel Valdez',
    img: '/calafate-editadas/Calafate-glaciar-bandera.jpg'
  }
]

const MostBoughtView: React.FC = () => {
  return (
    <MostBoughtContainer>
      <ItemDetail listContent={listHowWorks} />
      <HeadingTwo>Estas son las imagenes mas compradas del dia.</HeadingTwo>
    </MostBoughtContainer>
  )
}

export default MostBoughtView
