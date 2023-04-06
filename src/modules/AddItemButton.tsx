import { ButtonsColumn, ButtonsRow } from '@moduleStyled/ItemDetailStyled'
import { Button, SecondaryButton } from '@sharedComponents/Buttons'
import { Link, useParams } from 'react-router-dom'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import { useEffect, useState } from 'react'
import { type Context, useCartContext } from '@utilities/CartContext'

const AddItemButton: React.FC<{ item: IItemList }> = ({ item }) => {
  const { imageUrl, name, precio, autor, categoria, cantidad, id } = item
  const { itemId } = useParams()
  const [hasSelected, setSelected] = useState(false)
  const [hasAddedToCart, setAddedToCart] = useState(false)
  const { setNewProduct, cartList } = useCartContext() as Context

  const onAddCart = (newProduct: IItemList): void => {
    setNewProduct({ ...newProduct, cantidad })
  }

  useEffect(() => {
    const handleSelected = cartList.some(item => item.id === Number(itemId))
    setSelected(handleSelected)
  }, [itemId, hasSelected])

  return (
    <ButtonsRow>
      {!hasSelected && !hasAddedToCart ? (
        <Button
          onClick={() => {
            setAddedToCart(true)
            onAddCart({ imageUrl, name, autor, precio, categoria, cantidad, id })
          }}
        >
          Agregar al carrito
        </Button>
      ) : (
        <>
          <ButtonsColumn>
            <Link to={'/cart'}>
              <Button>Ir al carrito</Button>
            </Link>
            <Link to={`/category/${categoria}`}>
              <SecondaryButton>Elegi otro producto</SecondaryButton>
            </Link>
          </ButtonsColumn>
        </>
      )}
    </ButtonsRow>
  )
}

export default AddItemButton
