import styled from 'styled-components'
import { Logo } from '../sharedComponents/Logo'
import { Paragraph } from '../sharedComponents/Fonts'
import colors from '../styles/Colors'

const FooterView = styled.footer`
  background: ${colors.gray[100]};
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Paragraph} {
    color: ${colors.primary[600]};
    font-weight: 700;
  }
`

const Footer: React.FC = () => {
  return (
    <FooterView>
      <Logo />
      <Paragraph>©Creargtive, 2023. Todos los derechos reservados</Paragraph>
    </FooterView>
  )
}

export default Footer
