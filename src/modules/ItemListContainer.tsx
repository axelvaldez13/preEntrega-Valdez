import Hero from '@modules/Hero'
import ItemDetail from './ItemDetail'
import { CardListView } from '@moduleStyled/ItemListContainerStyled'
import { useEffect, useState } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { LoaderMessage } from '@sharedComponents/LoaderMessage'

type IListFirebase = Record<string, string | number>

const ItemListContainer: React.FC = () => {
  const [itemsList, setItemList] = useState<IListFirebase[]>([])
  const [loader, setLoader] = useState(true)

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const queries = doc(db, 'creargtive', 'images')
    await getDoc(queries)
      .then(response => {
        setItemList(response.data()?.itemList as IListFirebase[])
      })
      .finally(() => {
        setLoader(false)
      })
  }

  useEffect(() => {
    void fetchUserData()
  }, [])

  return (
    <>
      <Hero title="Descubre un banco de imágenes hecho en Argentina" subtitle="Compra stocks de imagenes para utilizar en tu emprendimiento en pesos" />
      {loader ? (
        <LoaderMessage />
      ) : (
        <CardListView>
          <ItemDetail listContent={itemsList} />
        </CardListView>
      )}
    </>
  )
}

export default ItemListContainer
