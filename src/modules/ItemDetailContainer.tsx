import styled from 'styled-components'
import { Paragraph } from '@sharedComponents/Fonts'
import colors from '../styles/Colors'
import { useEffect, useState } from 'react'
import { LoaderMessage } from '@sharedComponents/LoaderMessage'
import { useParams } from 'react-router-dom'

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
const getListRequest = new Promise(resolve => {
  resolve(contentCard)
})

const getList = async (): Promise<IProps[]> => {
  setLoader(true)
  return await getListRequest
    .then(response => response)
    .finally(() => {
      setLoader(false)
    })
}

const ItemDetailContainer: React.FC = () => {
  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(true)
  const { itemId } = useParams()

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
      if (typeof itemId !== 'undefined') {
        const filtredList = list.filter(prod => prod.id === Number(itemId))
        setProduct(filtredList)
      }
    }, 1000)
  }, [loader, product, itemId])

  return loader ? (
    <LoaderMessage />
  ) : (
    product.map(content => {
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
    })
  )
}

export default ItemDetailContainer
