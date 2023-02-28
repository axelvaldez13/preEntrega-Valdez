import styled from 'styled-components'
import { Paragraph } from '@sharedComponents/Fonts'
import theme from '@styles/Theme'

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .cardImage {
    height: 200px;
    border-radius: 4px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
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
  }

  .cardName {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Paragraph} {
      font-weight: 700;
    }

    .price {
      color: ${theme.color.primary[600]};
    }
  }
`

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
