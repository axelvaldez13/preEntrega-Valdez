import styled from 'styled-components'
import colors from '../styles/Colors'

export const Button = styled.button`
  background: ${colors.primary[600]};
  padding: 12px 24px;
  color: ${colors.white};
  border: none;
  cursor: pointer;
  font: 700 12px/16px 'Montserrat Alternates', sans-serif;
  border-radius: 4px;

  :hover {
    background: ${colors.primary[800]};
    transition: 0.5s ease-in-out background;
  }
`
