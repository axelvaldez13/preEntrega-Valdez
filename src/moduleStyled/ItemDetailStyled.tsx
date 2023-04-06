import styled from 'styled-components'
import theme from '@styles/Theme'

interface IImageDetail {
  backgroundImage: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-gap: 2rem;
  }

  .quantityTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${theme.color.gray[700]};
    border-top: 1px solid ${theme.color.gray[700]};

    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
    }
  }

  .infoPhoto {
    padding: 2rem;
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
    }

    @media screen and (min-width: 768px) {
      padding: 2.5rem 2rem 0 0;
    }
  }
`

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  button,
  a {
    width: 100%;
  }
`
export const ButtonsColumn = styled.div`
  display: flex;
  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-right: calc(0.5rem * var(--tw-space-y-reverse));
  }

  button,
  a {
    width: 100%;
  }
`

export const ImageDetail = styled.div<IImageDetail>`
  background: url(${props => props.backgroundImage}) center center / cover;
  width: 100%;
  height: 16rem;

  @media screen and (min-width: 768px) {
    height: 48rem;
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

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  .titleDescription {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .breadCrumb {
    display: flex;
    list-style: none;
    align-items: center;
    padding: 0 0 1rem 0;

    svg {
      width: 1.5rem;
    }

    li,
    li > a {
      display: flex;
      color: ${theme.color.gray[500]};
      text-transform: capitalize;
      font-size: 1rem;

      a {
        font-weight: 600;
      }
    }

    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-left: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-right: calc(0.5rem * var(--tw-space-y-reverse));
    }
  }
`

export const ItemQuantityContainer = styled.div`
  border: 1px solid ${theme.color.gray[700]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.gray[400]};
  border-radius: 0.2rem;

  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-left: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-right: calc(1rem * var(--tw-space-y-reverse));
  }

  button {
    background: none;
    color: ${theme.color.gray[400]};
    border: none;
    background: ${theme.color.gray[700]};
    font-size: 1.5rem;
    padding: 0.5rem 1rem;

    :hover {
      background: ${theme.color.gray[900]};
      transition: 0.5s ease-in-out background;
      cursor: pointer;
    }
  }
`
