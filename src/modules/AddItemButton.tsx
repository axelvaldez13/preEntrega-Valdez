import { ItemCountContainer } from '@moduleStyled/ItemDetailStyled'
import { ShoppingCart } from '@sharedComponents/Icons'

interface IAddItemButton {
  onAddCart: (newProduct: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const AddItemButton: React.FC<IAddItemButton> = (props: IAddItemButton) => {
  return (
    <ItemCountContainer>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          props.onAddCart(e)
        }}
      >
        <ShoppingCart />
      </button>
    </ItemCountContainer>
  )
}

export default AddItemButton
