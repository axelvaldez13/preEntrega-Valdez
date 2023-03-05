import { Paragraph } from '@sharedComponents/Fonts'
import { Card, CardImage } from '@moduleStyled/Layout'
import theme from '@styles/Theme'
import ItemCount from './ItemCount'
import { CartContext } from '@context/CartContext'
import { useContext } from 'react'

type IList = Record<string, string | number>
interface IListDetail {
  listContent: IList[]
}

export const ItemDetail: React.FC<IListDetail> = ({ listContent }) => {
  const contextProvider = useContext(CartContext)

  const onAddCart = (newProduct: IList): void => {
    contextProvider?.setNewProduct([...contextProvider?.cartList, newProduct])
  }

  return (
    <>
      {listContent.map((content, index) => {
        return (
          <Card key={index}>
            <CardImage backgroundImage={content.imageUrl === null ? '' : content.imageUrl}>
              <div>
                <Paragraph className="title">{content.category}</Paragraph>
              </div>
            </CardImage>
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

export default ItemDetail
