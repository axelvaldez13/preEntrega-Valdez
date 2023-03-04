import { Logo } from '@sharedComponents/Logo'
import { Paragraph } from '@sharedComponents/Fonts'
import { FooterView } from '@moduleStyled/FooterStyled'

const Footer: React.FC = () => {
  return (
    <FooterView>
      <Logo />
      <Paragraph>©Creargtive, 2023. Todos los derechos reservados</Paragraph>
    </FooterView>
  )
}

export default Footer
