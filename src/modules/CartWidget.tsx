import { ShoppingCart } from '@sharedComponents/Icons'
import { WidgetCount } from '@moduleStyled/CartWidgetStyled'
import { useContext } from 'react'
import { CartContext } from '@utilities/CartContext'

const CartWidget: React.FC = () => {
  const contextProvider = useContext(CartContext)

  return (
    <>
      {contextProvider?.cartList.length !== 0 && <WidgetCount>{contextProvider?.cartList.length}</WidgetCount>}
      <ShoppingCart />
    </>
  )
}

export default CartWidget
