import styled from 'styled-components'
import theme from '@styles/Theme'

interface IHighlight {
  backgroundImage: string
}

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem;

  .columnContainer {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
    }

    .columnsList {
      display: flex;
      align-items: center;

      .listIcon {
        background-color: ${theme.color.gray[700]};
        padding: 1rem;
        border-radius: 0.5rem;
        width: 4rem;
        height: 4rem;
        color: ${theme.color.primary[400]};
        margin-right: 1rem;
        justify-content: center;
        display: flex;

        svg {
          width: 1.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;

    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-left: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-right: calc(1rem * var(--tw-space-y-reverse));
    }
  }
`

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

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  @media screen and (min-width: 1366px) {
    width: 60%;
  }
`

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
    display: grid;
    grid-template-columns: 7fr 1fr;
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

export const HowWorksContainer = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  padding: 4rem 1.5rem;

  .textHeading {
    text-align: center;
    padding-bottom: 3rem;
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
  }

  .columnContainer {
    text-align: center;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 2rem;
    }

    .columnsList {
      > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
      }

      svg {
        width: 1.5rem;
        color: ${theme.color.primary[400]};
      }
      .iconList {
        background-color: ${theme.color.gray[700]};
        display: inline-flex;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 1rem 0;
      }
    }
  }
`
