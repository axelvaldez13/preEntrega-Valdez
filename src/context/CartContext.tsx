import { createContext, useState } from 'react'

type INewProduct = Record<string, string | number>

interface Props {
  children: React.ReactNode
}

export interface Context {
  cartList: INewProduct[]
  setNewProduct: (ar: INewProduct[]) => void
}

export const CartContext = createContext<Context | undefined>(undefined)

export const CartContextProvider = ({ children }: Props): JSX.Element => {
  const [cartList, setCartList] = useState([])
  const setNewProduct = (newProduct: INewProduct[]): void => {
    setCartList(newProduct as never[])
  }
  return <CartContext.Provider value={{ cartList, setNewProduct }}>{children}</CartContext.Provider>
}
