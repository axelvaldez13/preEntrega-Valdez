import { Paragraph } from '@sharedComponents/Fonts'
import { HighlightImage, CreatorHighlighInfo, HighlightContainer } from '@moduleStyled/HomeStyled'
import { type IHighlight } from '@typesProyect/HomeTypes'

const HighlightView: React.FC<{ data: IHighlight }> = ({ data }) => {
  const { imageUrl, autor, categoria } = data
  return (
    <>
      <HighlightContainer>
        <HighlightImage backgroundImage={imageUrl} />
        <CreatorHighlighInfo>
          <div>
            <Paragraph fontWeight={600}>Creador</Paragraph>
            <Paragraph>{autor}</Paragraph>
          </div>
          <div>
            <Paragraph fontWeight={600}>Categoria</Paragraph>
            <Paragraph>{categoria}</Paragraph>
          </div>
        </CreatorHighlighInfo>
      </HighlightContainer>
    </>
  )
}

export default HighlightView
