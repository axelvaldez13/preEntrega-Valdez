import styled from 'styled-components'
import { SecondaryButton } from '@sharedComponents/Buttons'
import { Funnel } from '@sharedComponents/Icons'
import { Paragraph } from '@sharedComponents/Fonts'
import { useState, useEffect } from 'react'
import { LoaderMessage } from '@sharedComponents/LoaderMessage'
import { useParams, Link } from 'react-router-dom'
import colors from '../styles/Colors'

interface IProps {
  id: number
  name: string
  price: number
  category: string
  img: string
}

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
    height: 200px;
    border-radius: 4px;
    background-position: center center;
    margin-bottom: 12px;
    display: flex;

    ${Paragraph} {
      margin: 8px;
      background: ${colors.info[600]};
      padding: 8px;
      color: #fff;
      font-size: 12px;
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
      color: ${colors.primary[600]};
    }
  }
`

const ItemListContainer: React.FC = () => {
  const [loader, setLoader] = useState(true)
  const [products, setProducts] = useState<IProps[]>([])
  const getListRequest = new Promise(resolve => {
    resolve(contentCard)
  })
  const { categoryId } = useParams()

  const getList = async (): Promise<IProps[]> => {
    setLoader(true)
    return await getListRequest
      .then(response => response)
      .finally(() => {
        setLoader(false)
      })
  }

  useEffect(() => {
    setTimeout(async () => {
      const list = await getList()
      if (typeof categoryId !== 'undefined') {
        const filtredList = list.filter(prod => prod.category.toLowerCase() === categoryId)
        setProducts(filtredList)
      } else {
        setProducts(list)
      }
    }, 1000)
  }, [loader, products, categoryId])

  return (
    <>
      <div className="rowActions">
        <SecondaryButton title="filter" type="button">
          <span className="icon">
            <Funnel />
          </span>
          Filtros
        </SecondaryButton>
      </div>
      {loader ? (
        <LoaderMessage />
      ) : (
        <CardListView>
          {products.map(content => {
            return (
              <Link key={content.id} to={`item/${content.id}`}>
                <Card>
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
              </Link>
            )
          })}
        </CardListView>
      )}
    </>
  )
}

export default ItemListContainer
