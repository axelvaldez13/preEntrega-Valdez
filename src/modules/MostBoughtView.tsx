import { MostBoughtContainer } from '@moduleStyled/MostBoughtStyled'
import { HeadingTwo } from '@sharedComponents/Fonts'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { LoaderMessage } from '@sharedComponents/LoaderMessage'

type IListFirebase = Record<string, string | number>

const MostBoughtView: React.FC = () => {
  const [mostList, setMostList] = useState<IListFirebase[]>([])
  const [loader, setLoader] = useState(true)

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const queries = doc(db, 'creargtive', 'mostbought')
    await getDoc(queries)
      .then(response => {
        setMostList(response.data()?.mostbought as IListFirebase[])
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
      {loader ? (
        <LoaderMessage />
      ) : (
        <MostBoughtContainer>
          <ItemDetail listContent={mostList} />
          <HeadingTwo>Estas son las imagenes mas compradas del dia.</HeadingTwo>
        </MostBoughtContainer>
      )}
    </>
  )
}

export default MostBoughtView
