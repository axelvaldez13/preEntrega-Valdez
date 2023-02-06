import { ShoppingCart } from '@sharedComponents/Icons'

interface INotification {
  quantity: number
}

const CartWidget: React.FC<INotification> = (props: INotification) => {
  return (
    <>
      <span>{props.quantity}</span>
      <ShoppingCart />
    </>
  )
}

export default CartWidget
