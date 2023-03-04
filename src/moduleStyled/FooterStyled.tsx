import { Paragraph } from '@sharedComponents/Fonts'
import styled from 'styled-components'
import theme from '@styles/Theme'

export const FooterView = styled.footer`
  background: ${theme.color.gray[100]};
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Paragraph} {
    color: ${theme.color.primary[600]};
    font-weight: 700;
  }
`
