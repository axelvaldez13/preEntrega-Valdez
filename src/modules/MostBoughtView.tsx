import { MostBoughtContainer } from '@moduleStyled/MostBoughtStyled'
import { HeadingTwo } from '@sharedComponents/Fonts'
import ItemCardView from '@modules/ItemCardView'
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
        const data = response.data()?.mostbought as IListFirebase[]
        setMostList(data)
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
          <ItemCardView listContent={mostList} />
          <HeadingTwo>Estas son las imagenes mas compradas del dia.</HeadingTwo>
        </MostBoughtContainer>
      )}
    </>
  )
}

export default MostBoughtView
