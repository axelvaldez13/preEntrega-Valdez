import { ItemQuantityContainer } from '@moduleStyled/ItemDetailStyled'
import { useEffect, type Dispatch, type SetStateAction } from 'react'

type Dispatcher<S> = Dispatch<SetStateAction<S>>

const ItemQuantitySelector: React.FC<{ quantity: number; setQuantity: Dispatcher<number> }> = ({ quantity, setQuantity }) => {
  useEffect(() => {
    if (quantity === 0) setQuantity(1)
  }, [quantity])

  return (
    <ItemQuantityContainer>
      <button
        onClick={() => {
          setQuantity(quantity - 1)
        }}
      >
        -
      </button>
      <div>{quantity}</div>
      <button
        onClick={() => {
          setQuantity(quantity + 1)
        }}
      >
        +
      </button>
    </ItemQuantityContainer>
  )
}

export default ItemQuantitySelector
