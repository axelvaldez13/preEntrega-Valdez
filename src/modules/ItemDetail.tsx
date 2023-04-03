import { ImageDetail } from '@moduleStyled/ItemDetailStyled'
import { useContext } from 'react'
import { HeadingThree, HeadingTwo, Paragraph } from '@sharedComponents/Fonts'
import theme from '@styles/Theme'
import { CartContext } from '@utilities/CartContext'
import { Button } from '@sharedComponents/Buttons'
import { type IItemList } from '@typesProyect/ItemDetailTypes'

const ItemDetail: React.FC<{ item: IItemList }> = ({ item }) => {
  const { imageUrl, name, precio, autor, categoria } = item

  const contextProvider = useContext(CartContext)
  const onAddCart = (newProduct: IItemList): void => {
    contextProvider?.setNewProduct([...contextProvider?.cartList, newProduct])
  }

  return (
    <>
      <ImageDetail backgroundImage={imageUrl} />
      <div className="infoPhoto">
        <HeadingTwo>{name}</HeadingTwo>
        <HeadingThree fontWeight={600} color={theme.color.primary[400]}>
          ${precio}
        </HeadingThree>
        <Paragraph fontWeight={400}>
          Tomadas por {autor}, en la categoria: {categoria}
        </Paragraph>
        <Button
          onClick={() => {
            onAddCart({ imageUrl, name, autor, categoria })
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  )
}

export default ItemDetail
