import { Paragraph } from '@sharedComponents/Fonts'
import { Card, CardImage } from '@moduleStyled/Layout'
import theme from '@styles/Theme'
import ItemCount from './ItemCount'
import { CartContext } from '@utilities/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { type IItemList } from '@typesProyect/ItemDetailTypes'

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
                <div>
                  <Paragraph className="title">{content.categoria}</Paragraph>
                </div>
              </CardImage>
            </Link>
            <div className="cardInfoContainer">
              <div className="cardName">
                <Paragraph fontWeight={200}>
                  {content.name} - {content.autor}
                </Paragraph>
                <Paragraph fontWeight={600} color={theme.color.primary[400]}>
                  ${content.precio} ARS
                </Paragraph>
              </div>
              <ItemCount
                onAddCart={() => {
                  onAddCart(content)
                }}
              />
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default ItemList
