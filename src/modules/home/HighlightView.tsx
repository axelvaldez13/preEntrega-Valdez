import { Paragraph } from '@sharedComponents/Fonts'
import { HighlightImage, CreatorHighlighInfo, HighlightContainer } from '@moduleStyled/HomeStyled'
import { useEffect, useState } from 'react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import { LoaderMessage } from '@sharedComponents/LoaderMessage'

interface IHighlight {
  imageUrl: string
  autor: string
  categoria: string
}
const HighlightView: React.FC = () => {
  const [highlight, setHighligh] = useState<IHighlight | null>(null)
  const [loader, setLoader] = useState(true)

  const fetchUserData = async (): Promise<void> => {
    const db = getFirestore()
    const queries = doc(db, 'creargtive', 'highlight')
    await getDoc(queries)
      .then(response => {
        setHighligh(response.data() as IHighlight)
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
        <HighlightContainer>
          <HighlightImage backgroundImage={highlight?.imageUrl ?? ''} />
          <CreatorHighlighInfo>
            <div>
              <Paragraph fontWeight={600}>Creador</Paragraph>
              <Paragraph>{highlight?.autor}</Paragraph>
            </div>
            <div>
              <Paragraph fontWeight={600}>Categoria</Paragraph>
              <Paragraph>{highlight?.categoria}</Paragraph>
            </div>
          </CreatorHighlighInfo>
        </HighlightContainer>
      )}
    </>
  )
}

export default HighlightView
