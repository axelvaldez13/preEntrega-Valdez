import { ItemCountContainer } from '@moduleStyled/ItemCountStyled'
import { Heart, ShoppingCart } from '@sharedComponents/Icons'

const ItemCount: React.FC = () => {
  return (
    <ItemCountContainer>
      <button>
        <Heart />
      </button>
      <button>
        <ShoppingCart />
      </button>
    </ItemCountContainer>
  )
}

export default ItemCount
