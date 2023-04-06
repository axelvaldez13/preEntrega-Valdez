import { type IItemList } from '@typesProyect/ItemDetailTypes'
import { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export interface Context {
  cartList: IItemList[]
  setNewProduct: (ar: IItemList) => void
  emptyCart: () => void
  deleteProduct: (id: number) => void
  totalQuantity: () => number
  totalPrice: () => number
}

export const CartContext = createContext<Context | undefined>(undefined)

export const useCartContext = (): Context | undefined => useContext(CartContext)

export const CartContextProvider = ({ children }: Props): JSX.Element => {
  const [cartList, setCartList] = useState<IItemList[]>([])

  const setNewProduct = (newProduct: IItemList): void => {
    const idProd = cartList.findIndex(product => product.id === newProduct.id)
    if (idProd !== -1) {
      cartList[idProd].cantidad += newProduct.cantidad
      setCartList([...cartList])
    } else {
      setCartList([...cartList, newProduct])
    }
  }

  const totalPrice = (): number => cartList.reduce((count, prod) => (count += prod.cantidad * (prod.precio !== undefined ? prod.precio : 0)), 0)

  const totalQuantity = (): number => cartList.reduce((count, prod) => (count += prod.cantidad), 0)

  const deleteProduct = (id: number): void => {
    setCartList(cartList.filter(prod => prod.id !== id))
  }

  const emptyCart = (): void => {
    setCartList([])
  }

  return <CartContext.Provider value={{ cartList, setNewProduct, emptyCart, deleteProduct, totalPrice, totalQuantity }}>{children}</CartContext.Provider>
}
