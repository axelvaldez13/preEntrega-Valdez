import { ShoppingCart } from '@sharedComponents/Icons'
import { CartContext } from '@context/CartContext'
import { WidgetCount } from '@moduleStyled/CartWidgetStyled'
import { useContext } from 'react'

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
