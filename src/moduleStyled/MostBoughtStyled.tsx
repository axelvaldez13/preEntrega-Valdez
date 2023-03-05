import styled from 'styled-components'

export const MostBoughtContainer = styled.div`
  padding: 5rem 1.5rem;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
`
