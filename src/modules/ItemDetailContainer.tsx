import { useEffect, useState } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { LoaderFixed } from '@sharedComponents/LoaderMessage'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { type IItemList } from '@typesProyect/ItemDetailTypes'

const ItemDetailContainer: React.FC = () => {
  const [itemsList, setItemList] = useState<IItemList>()
  const [loader, setLoader] = useState(true)
  const { itemId } = useParams()

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const queries = doc(db, 'creargtive', 'images')
    await getDoc(queries)
      .then(response => {
        const arrData = response.data()?.itemList as IItemList[]
        const filtredData = arrData.filter(rp => {
          return rp.id === Number(itemId)
        })
        setItemList(filtredData[0])
      })
      .finally(() => {
        setLoader(false)
      })
  }

  useEffect(() => {
    void fetchUserData()
  }, [itemId])

  return (
    <>
      {loader ? (
        <LoaderFixed />
      ) : (
        <>
          <ItemDetail item={itemsList as IItemList} />
        </>
      )}
    </>
  )
}

export default ItemDetailContainer
