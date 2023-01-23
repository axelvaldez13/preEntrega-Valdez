import styled from 'styled-components'
import { SecondaryButton } from '../sharedComponents/Buttons'
import { Paragraph } from '../sharedComponents/Fonts'
import { Funnel } from '../sharedComponents/Icons'
import Tabs from '../sharedComponents/Tabs'
import TabController from '../utilities/TabController'
import colors from '../styles/Colors'

const Layout = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;

  .rowActions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const sections = TabController([
  {
    name: 'Paisajes'
  },
  {
    name: 'Alimentos'
  },
  {
    name: 'Arquitectura'
  },
  {
    name: 'Publicitaria'
  },
  {
    name: 'Retratos'
  },
  {
    name: 'Macro'
  }
])

const contentCard = [
  {
    id: 0,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-01.jpg'
  },
  {
    id: 1,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-02.jpg'
  },
  {
    id: 2,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-bandera.jpg'
  },
  {
    id: 3,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-bosque.jpg'
  },
  {
    id: 4,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-parque-montana.jpg'
  },
  {
    id: 5,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-parque.jpg'
  },
  {
    id: 6,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-pasarela.jpg'
  },
  {
    id: 7,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar.jpg'
  },
  {
    id: 8,
    name: 'Glaciares',
    price: 1234,
    img: '/calafate-editadas/Calafate-glaciar-gran-angular.jpg'
  },
  {
    id: 9,
    name: 'Glaciares',
    price: 1234,
    img: '/chalten-editadas/Chalten-fitz-laguna.jpg'
  }
]

const CardListView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
  }

  > div {
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .cardImage {
    height: 400px;
    border-radius: 4px;
    background-position: center center;
    margin-bottom: 12px;
  }

  .cardName {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Paragraph} {
      font-weight: 700;
    }

    .price {
      color: ${colors.primary[600]};
    }
  }
`

const ItemListContainer: React.FC = () => {
  return (
    <Layout>
      <div className="rowActions">
        <Tabs sections={sections} />
        <SecondaryButton title="filter" type="button">
          <span className="icon">
            <Funnel />
          </span>
          Filtros
        </SecondaryButton>
      </div>
      <CardListView>
        {contentCard.map(content => {
          return (
            <Card key={content.id}>
              <div className="cardImage" style={{ backgroundImage: `url(${content.img})` }} />
              <div className="cardName">
                <Paragraph className="title">{content.name}</Paragraph>
                <Paragraph className="price">${content.price} ARS</Paragraph>
              </div>
            </Card>
          )
        })}
      </CardListView>
    </Layout>
  )
}

export default ItemListContainer
