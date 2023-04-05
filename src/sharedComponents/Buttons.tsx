import styled from 'styled-components'
import theme from '../styles/Theme'

export const Button = styled.button`
  background: ${theme.color.primary[600]};
  padding: 12px 24px;
  width: 100%;
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
  padding: 12px 24px;
  color: ${theme.color.primary[400]};
  background: ${theme.color.gray[800]};
  border: 1px solid ${theme.color.primary[400]};
  cursor: pointer;
  font: 700 12px/16px 'Montserrat Alternates', sans-serif;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  :hover {
    color: ${theme.color.primary[200]};
    background: ${theme.color.gray[800]};
    border: 1px solid ${theme.color.primary[200]};
    transition: 0.5s ease-in-out background;
  }
`

export const SecondaryLink = styled.a`
  padding: 12px 24px;
  color: ${theme.color.primary[400]};
  background: ${theme.color.gray[800]};
  border: 1px solid ${theme.color.primary[400]};
  cursor: pointer;
  font: 700 12px/16px 'Montserrat Alternates', sans-serif;
  border-radius: 4px;
  display: flex;
  text-decoration: none;
  align-items: center;
  text-align: center;
  justify-content: center;

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  :hover {
    color: ${theme.color.primary[200]};
    background: ${theme.color.gray[800]};
    border: 1px solid ${theme.color.primary[200]};
    transition: 0.5s ease-in-out background;
  }
`
