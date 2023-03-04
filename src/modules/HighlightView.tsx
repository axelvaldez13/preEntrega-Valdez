import { Paragraph } from '@sharedComponents/Fonts'
import { HighlightImage, CreatorHighlighInfo, HighlightContainer } from '@moduleStyled/HighLightStyled'

const HighlightView: React.FC = () => {
  const hola = '/calafate-editadas/Calafate-glaciar-02.jpg'
  return (
    <>
      <HighlightContainer>
        <HighlightImage backgroundImage={hola} />
        <CreatorHighlighInfo>
          <div>
            <Paragraph fontWeight={600}>Creador</Paragraph>
            <Paragraph>Axel Hernan Valdez</Paragraph>
          </div>
          <div>
            <Paragraph fontWeight={600}>Categoria</Paragraph>
            <Paragraph>Paisajes</Paragraph>
          </div>
        </CreatorHighlighInfo>
      </HighlightContainer>
    </>
  )
}

export default HighlightView
