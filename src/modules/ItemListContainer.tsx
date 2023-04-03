import Hero from '@modules/home/Hero'
import ItemList from './ItemList'
import { CardListView } from '@moduleStyled/ItemListStyled'
import { useEffect, useState } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { LoaderFixed } from '@sharedComponents/LoaderMessage'
import { useParams } from 'react-router-dom'
import { type IItemList } from '@typesProyect/ItemDetailTypes'

const ItemListContainer: React.FC = () => {
  const [itemsList, setItemList] = useState<IItemList[]>([])
  const [loader, setLoader] = useState(true)
  const { categoryId } = useParams()

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const queries = doc(db, 'creargtive', 'images')
    await getDoc(queries)
      .then(response => {
        let data = response.data()?.itemList as IItemList[]
        if (typeof categoryId !== 'undefined') {
          const responseData = response.data()?.itemList as IItemList[]
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
        <LoaderFixed />
      ) : (
        <CardListView>
          <ItemList listContent={itemsList} />
        </CardListView>
      )}
    </>
  )
}

export default ItemListContainer
