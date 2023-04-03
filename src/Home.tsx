import HowWorksView from '@modules/home/HowWorksView'
import MostBoughtView from '@modules/home/MostBoughtView'
import CategoryListView from '@modules/home/CategoryListView'
import HighlightView from '@modules/home/HighlightView'
import Hero from '@modules/home/Hero'
import { useEffect, useState } from 'react'
import { type IHighlight } from '@typesProyect/HomeTypes'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import { LoaderFixed } from '@sharedComponents/LoaderMessage'

const Home: React.FC = () => {
  const [highlight, setHighligh] = useState<IHighlight>()
  const [mostList, setMostList] = useState<IItemList[]>([])
  const [loader, setLoader] = useState(true)

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const highLightQueries = doc(db, 'creargtive', 'highlight')
    const mostboughtQueries = doc(db, 'creargtive', 'mostbought')
    const request = getDoc
    await Promise.all([request(highLightQueries), request(mostboughtQueries)])
      .then(response => {
        setHighligh(response[0].data() as IHighlight)
        setMostList(response[1].data()?.mostbought as IItemList[])
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
        <LoaderFixed />
      ) : (
        <>
          <Hero title="Descubre un banco de imágenes hecho en Argentina" subtitle="Compra stocks de imagenes para utilizar en tu emprendimiento en pesos" />
          <HighlightView data={highlight as IHighlight} />
          <HowWorksView />
          <MostBoughtView mostList={mostList} />
          <CategoryListView />
        </>
      )}
    </>
  )
}

export default Home
