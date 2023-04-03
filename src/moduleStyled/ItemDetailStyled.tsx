import styled from 'styled-components'
import theme from '@styles/Theme'

interface IImageDetail {
  backgroundImage: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4rem 1.5rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
  }

  .infoPhoto {
    padding: 1rem 0;
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
    }

    @media screen and (min-width: 768px) {
      padding: 0;
    }
  }
`

export const ImageDetail = styled.div<IImageDetail>`
  background: url(${props => props.backgroundImage}) center center / cover;
  width: 100%;
  height: 24rem;

  @media screen and (min-width: 768px) {
    height: 40rem;
  }
`

export const ItemCountContainer = styled.div`
  display: flex;
  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-right: calc(0.5rem * var(--tw-space-y-reverse));
  }

  button {
    color: ${theme.color.gray[400]};
    width: 24px;
    cursor: pointer;
    height: 24px;
    background: none;
    border: none;
    position: relative;

    :hover {
      color: ${theme.color.primary[400]};
      transition: 0.5s ease-in-out color;
    }
  }
`
