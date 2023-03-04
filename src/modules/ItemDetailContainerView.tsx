import { Card } from '@moduleStyled/ItemDetailStyled'
import { Paragraph } from '@sharedComponents/Fonts'

const contentCard = [
  {
    id: 0,
    name: 'Glaciares',
    price: 1234,
    category: 'Macro',
    img: '/calafate-editadas/Calafate-glaciar-01.jpg'
  },
  {
    id: 1,
    name: 'Glaciares',
    category: 'Paisajes',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-02.jpg'
  },
  {
    id: 2,
    name: 'Glaciares',
    category: 'Alimentos',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-bandera.jpg'
  },
  {
    id: 3,
    name: 'Arquitectura',
    category: 'Arquitectura',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-bosque.jpg'
  },
  {
    id: 4,
    name: 'Glaciares',
    price: 1234,
    category: 'Publicitaria',
    img: '/calafate-editadas/Calafate-glaciar-parque-montana.jpg'
  },
  {
    id: 5,
    name: 'Glaciares',
    price: 1234,
    category: 'Retrato',
    img: '/calafate-editadas/Calafate-glaciar-parque.jpg'
  },
  {
    id: 6,
    name: 'Glaciares',
    price: 1234,
    category: 'Macro',
    img: '/calafate-editadas/Calafate-glaciar-pasarela.jpg'
  },
  {
    id: 7,
    name: 'Glaciares',
    price: 1234,
    category: 'Alimentos',
    img: '/calafate-editadas/Calafate-glaciar.jpg'
  },
  {
    id: 8,
    name: 'Glaciares',
    price: 1234,
    category: 'Macro',
    img: '/calafate-editadas/Calafate-glaciar-gran-angular.jpg'
  },
  {
    id: 9,
    name: 'Glaciares',
    price: 1234,
    category: 'Alimentos',
    img: '/chalten-editadas/Chalten-fitz-laguna.jpg'
  }
]

const ItemDetailContainer: React.FC = () => {
  return (
    <>
      {contentCard.map(content => {
        return (
          <Card key={content.id}>
            <div className="cardImage" style={{ backgroundImage: `url(${content.img})` }}>
              <div>
                <Paragraph className="title">{content.category}</Paragraph>
              </div>
            </div>
            <div className="cardName">
              <Paragraph className="title">{content.name}</Paragraph>
              <Paragraph className="price">${content.price} ARS</Paragraph>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default ItemDetailContainer
