import { HeadingThree, Paragraph } from '@sharedComponents/Fonts'
import { Badge, Card, CardImage } from '@moduleStyled/Layout'
import theme from '@styles/Theme'
import { CartContext } from '@utilities/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import { ItemCountContainer } from '@moduleStyled/ItemDetailStyled'
import { ShoppingCart } from '@sharedComponents/Icons'

interface IListDetail {
  listContent: IItemList[]
}

export const ItemList: React.FC<IListDetail> = ({ listContent }) => {
  const contextProvider = useContext(CartContext)

  const onAddCart = (newProduct: IItemList): void => {
    contextProvider?.setNewProduct([...contextProvider?.cartList, newProduct])
  }

  return (
    <>
      {listContent.map((content, index) => {
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
                    onAddCart(content)
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
