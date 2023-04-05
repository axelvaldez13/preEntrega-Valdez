import { ButtonsRow } from '@moduleStyled/ItemDetailStyled'
import { Button, SecondaryButton } from '@sharedComponents/Buttons'
import { Link } from 'react-router-dom'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import { useContext } from 'react'
import { CartContext } from '@utilities/CartContext'

const AddItemButton: React.FC<{ item: IItemList }> = ({ item }) => {
  const { imageUrl, name, precio, autor, categoria } = item

  const contextProvider = useContext(CartContext)
  const onAddCart = (newProduct: IItemList): void => {
    contextProvider?.setNewProduct([...contextProvider?.cartList, newProduct])
  }

  return (
    <ButtonsRow>
      <Button
        onClick={() => {
          onAddCart({ imageUrl, name, autor, precio, categoria })
        }}
      >
        Agregar al carrito
      </Button>
      <Link to={'/cart'}>
        <SecondaryButton>Ir al carrito</SecondaryButton>
      </Link>
    </ButtonsRow>
  )
}

export default AddItemButton
