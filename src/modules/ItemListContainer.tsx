import Hero from '@modules/Hero'
import ItemDetail from './ItemCardView'
import { CardListView } from '@moduleStyled/ItemListContainerStyled'
import { useEffect, useState } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { LoaderMessage } from '@sharedComponents/LoaderMessage'
import { useParams } from 'react-router-dom'

type IListFirebase = Record<string, string | number>

const ItemListContainer: React.FC = () => {
  const [itemsList, setItemList] = useState<IListFirebase[]>([])
  const [loader, setLoader] = useState(true)
  const { categoryId } = useParams()

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const queries = doc(db, 'creargtive', 'images')
    await getDoc(queries)
      .then(response => {
        let data = response.data()?.itemList as IListFirebase[]
        if (typeof categoryId !== 'undefined') {
          const responseData = response.data()?.itemList as IListFirebase[]
          data = responseData.filter(id => {
            return id.categoria === categoryId
          })
        }
        setItemList(data)
      })
      .finally(() => {
        setLoader(false)
      })
  }

  useEffect(() => {
    void fetchUserData()
  }, [categoryId])

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
