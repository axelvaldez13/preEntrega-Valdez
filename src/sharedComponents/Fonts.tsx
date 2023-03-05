import styled from 'styled-components'
import theme from '@styles/Theme'

interface ITextStyles {
  fontWeight?: number
  color?: string
}

export const HeadingOne = styled.h1<ITextStyles>`
  font: ${theme.font.textXxl};
  font-weight: ${props => props.fontWeight ?? 700};
  color: ${props => props.color ?? `${theme.color.primary[400]}`};
`

export const HeadingTwo = styled.h2<ITextStyles>`
  font: ${theme.font.textXl};
  font-weight: ${props => props.fontWeight ?? 700};
  color: ${props => props.color ?? `${theme.color.gray[400]}`};
`

export const HeadingThree = styled.p<ITextStyles>`
  font: ${theme.font.textBase};
  font-weight: ${props => props.fontWeight ?? 700};
  color: ${props => props.color ?? `${theme.color.gray[400]}`};
`

export const Paragraph = styled.p<ITextStyles>`
  font: ${theme.font.textSm};
  font-weight: ${props => props.fontWeight ?? 400};
  color: ${props => props.color ?? `${theme.color.gray[400]}`};
`

export const Caption = styled.p<ITextStyles>`
  font: ${theme.font.textXs};
  font-weight: ${props => props.fontWeight ?? 400};
  color: ${props => props.color ?? `${theme.color.gray[400]}`};
`
