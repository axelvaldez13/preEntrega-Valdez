import styled from 'styled-components'
import theme from '@styles/Theme'

export const WidgetCount = styled.span`
  background: ${theme.color.primary[600]};
  color: ${theme.color.white};
  font-weight: 700;
  width: 24px;
  height: 24px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  bottom: 12px;
  left: 12px;
  font: 700 12px/16px 'Montserrat Alternates', sans-serif;
`
