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

export const SecondaryButton = styled.button`
  background: ${colors.white};
  padding: 12px 24px;
  color: ${colors.gray[400]};
  border: 1px solid ${colors.gray[400]};
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
    background: ${colors.gray[400]};
    color: ${colors.white};
    transition: 0.5s ease-in-out background;
  }
`
