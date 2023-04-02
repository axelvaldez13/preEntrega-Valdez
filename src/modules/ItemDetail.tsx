import { ImageDetail } from '@moduleStyled/ItemDetailStyled'
import { useEffect, useState, useContext } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { HeadingThree, HeadingTwo, Paragraph } from '@sharedComponents/Fonts'
import theme from '@styles/Theme'
import { CartContext } from '@utilities/CartContext'
import { Button } from '@sharedComponents/Buttons'

type IListFirebase = Record<string, string | number>
type IList = Record<string, string | number>

const ItemDetail: React.FC = () => {
  const [itemsList, setItemList] = useState<IListFirebase>({})
  const { itemId } = useParams()
  const contextProvider = useContext(CartContext)

  const onAddCart = (newProduct: IList): void => {
    contextProvider?.setNewProduct([...contextProvider?.cartList, newProduct])
  }

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const queries = doc(db, 'creargtive', 'images')
    await getDoc(queries).then(response => {
      const arrData = response.data()?.itemList as IListFirebase[]
      const filtredData = arrData.filter(rp => {
        return rp.id === Number(itemId)
      })
      setItemList(filtredData[0])
    })
  }

  useEffect(() => {
    void fetchUserData()
  }, [itemId])

  return (
    <>
      <ImageDetail backgroundImage={itemsList.imageUrl as string} />
      <div className="infoPhoto">
        <HeadingTwo>{itemsList.name}</HeadingTwo>
        <HeadingThree fontWeight={600} color={theme.color.primary[400]}>
          ${itemsList.precio}
        </HeadingThree>
        <Paragraph fontWeight={400}>
          Tomadas por {itemsList.autor}, en la categoria: {itemsList.categoria}
        </Paragraph>
        <Button
          onClick={() => {
            onAddCart(itemsList)
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  )
}

export default ItemDetail
