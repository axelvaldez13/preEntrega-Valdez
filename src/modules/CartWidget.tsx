import { ShoppingCart } from '@sharedComponents/Icons'
import { WidgetCount } from '@moduleStyled/CartWidgetStyled'
import { type Context, useCartContext } from '@utilities/CartContext'

const CartWidget: React.FC = () => {
  const { cartList } = useCartContext() as Context

  return (
    <>
      {cartList.length !== 0 && <WidgetCount>{cartList.length}</WidgetCount>}
      <ShoppingCart />
    </>
  )
}

export default CartWidget
