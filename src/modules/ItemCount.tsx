import { ItemCountContainer } from '@moduleStyled/ItemCountStyled'
import { ShoppingCart } from '@sharedComponents/Icons'

interface IItemCount {
  onAddCart: (newProduct: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ItemCount: React.FC<IItemCount> = (props: IItemCount) => {
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

export default ItemCount
