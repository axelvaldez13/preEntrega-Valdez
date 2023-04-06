import { HeadingThree, Paragraph } from '@sharedComponents/Fonts'
import { Badge, Card, CardImage } from '@moduleStyled/Layout'
import theme from '@styles/Theme'
import { type Context, useCartContext } from '@utilities/CartContext'
import { Link } from 'react-router-dom'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import { ItemCountContainer } from '@moduleStyled/ItemDetailStyled'
import { ShoppingCart } from '@sharedComponents/Icons'

interface IListDetail {
  listContent: IItemList[]
}

const ItemList: React.FC<IListDetail> = ({ listContent }) => {
  const { setNewProduct } = useCartContext() as Context
  const onAddCart = (newProduct: IItemList): void => {
    setNewProduct({ ...newProduct, cantidad: newProduct.cantidad })
  }

  return (
    <>
      {listContent.map((content, index) => {
        const itemContent = {
          imageUrl: content.imageUrl,
          name: content.name,
          id: content.id,
          precio: content.precio,
          categoria: content.categoria,
          autor: content.autor,
          cantidad: 1
        }

        return (
          <Card key={index}>
            <Link to={`/item/${content.id as number}`}>
              <CardImage backgroundImage={content.imageUrl === null ? '' : content.imageUrl}>
                <Badge>
                  <Paragraph>{content.categoria}</Paragraph>
                </Badge>
              </CardImage>
            </Link>
            <div className="cardInfoContainer">
              <div className="cardName">
                <HeadingThree fontWeight={200}>
                  {content.name} - {content.autor}
                </HeadingThree>
                <HeadingThree fontWeight={600} color={theme.color.primary[400]}>
                  ${content.precio} ARS
                </HeadingThree>
              </div>
              <ItemCountContainer>
                <button
                  onClick={() => {
                    onAddCart(itemContent)
                  }}
                >
                  <ShoppingCart />
                </button>
              </ItemCountContainer>
            </div>
          </Card>
        )
      })}
    </>
  )
}
export default ItemList
