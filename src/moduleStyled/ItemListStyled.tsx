import styled from 'styled-components'

export const CardListView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;
  }
`
