import styled from 'styled-components'

interface ILayout {
  flexDirection?: 'row' | 'column'
}

export const Layout = styled.div<ILayout>`
  display: flex;
  overflow: scroll;
  flex-direction: ${props => props.flexDirection ?? 'column'};
  flex: 1;
`
