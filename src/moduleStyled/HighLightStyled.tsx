import styled from 'styled-components'

interface IHighlight {
  backgroundImage: string
}

export const CreatorHighlighInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-top: 1rem;

  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  @media screen and (min-width: 768px) {
    padding-left: 1rem;
  }
`
export const HighlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  justify-content: end;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const HighlightImage = styled.div<IHighlight>`
  background: url(${props => props.backgroundImage}) center center / cover;
  width: 100%;
  height: 24rem;

  @media screen and (min-width: 768px) {
    height: 40rem;
  }
`
