import styled from 'styled-components'
import theme from '@styles/Theme'
import { Paragraph } from '@sharedComponents/Fonts'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .cardImage {
    height: 200px;
    border-radius: 4px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 12px;
    display: flex;

    ${Paragraph} {
      margin: 8px;
      background: ${theme.color.primary[600]};
      padding: 8px;
      color: #fff;
      font: ${theme.font.fontSm};
      border-radius: 4px;
    }
  }

  .cardName {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Paragraph} {
      font-weight: 700;
    }

    .price {
      color: ${theme.color.primary[600]};
    }
  }
`
