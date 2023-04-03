import { type IItemList } from '@typesProyect/ItemDetailTypes'
import { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export interface Context {
  cartList: IItemList[]
  setNewProduct: (ar: IItemList[]) => void
}

export const CartContext = createContext<Context | undefined>(undefined)

export const CartContextProvider = ({ children }: Props): JSX.Element => {
  const [cartList, setCartList] = useState([])
  const setNewProduct = (newProduct: IItemList[]): void => {
    setCartList(newProduct as never[])
  }
  return <CartContext.Provider value={{ cartList, setNewProduct }}>{children}</CartContext.Provider>
}
