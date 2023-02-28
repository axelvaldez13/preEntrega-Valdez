import styled from 'styled-components'
import theme from '../styles/Theme'

export const Button = styled.button`
  background: ${theme.color.primary[600]};
  padding: 12px 24px;
  color: ${theme.color.white};
  border: none;
  cursor: pointer;
  font: 700 12px/16px 'Montserrat Alternates', sans-serif;
  border-radius: 4px;

  :hover {
    background: ${theme.color.primary[800]};
    transition: 0.5s ease-in-out background;
  }
`

export const SecondaryButton = styled.button`
  background: ${theme.color.white};
  padding: 12px 24px;
  color: ${theme.color.gray[400]};
  border: 1px solid ${theme.color.gray[400]};
  cursor: pointer;
  font: 700 12px/16px 'Montserrat Alternates', sans-serif;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  :hover {
    background: ${theme.color.gray[400]};
    color: ${theme.color.white};
    transition: 0.5s ease-in-out background;
  }
`
