import styled from 'styled-components'
import theme from '@styles/Theme'
import { Paragraph } from '@sharedComponents/Fonts'

interface ILayout {
  flexDirection?: 'row' | 'column'
}

export const Layout = styled.div<ILayout>`
  display: flex;
  overflow: scroll;
  flex-direction: ${props => props.flexDirection ?? 'column'};
  flex: 1;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .cardInfoContainer {
    display: flex;
    justify-content: space-between;
    .cardName {
      display: flex;
      flex-direction: column;
    }
  }
`

interface ICardImage {
  backgroundImage: string | number
}

export const CardImage = styled.div<ICardImage>`
  background: url(${props => props.backgroundImage}) center center / cover;
  width: 100%;
  height: 12rem;
  border-radius: 4px;
  background-position: center center;
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
`
