import styled from 'styled-components'
import theme from '@styles/Theme'

export const ListCart = styled.div`
  padding: 2rem;
  display: flex;
  background: ${theme.color.gray[700]};
  border-radius: 0.5rem;
  justify-content: space-between;
  align-items: center;

  .cartInfo {
    display: flex;
    align-items: center;
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-left: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-right: calc(1rem * var(--tw-space-y-reverse));
    }
  }
`

interface IHighlight {
  backgroundImage: string
}

export const Container = styled.div`
  padding: 2rem;
  flex: 1;

  .columnsCart {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;

    .rowsCart {
      > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));
      }
    }

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 3rem;
    }

    .formList {
      > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));
      }
      input {
        width: 100%;
      }
      form {
        > :not([hidden]) ~ :not([hidden]) {
          --tw-space-y-reverse: 0;
          margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
          margin-bottom: calc(1rem * var(--tw-space-y-reverse));
        }
      }
    }
  }
`

export const ListCartImage = styled.div<IHighlight>`
  background: url(${props => props.backgroundImage}) center center / cover;
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
`

export const TitleHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  @media screen and (min-width: 1366px) {
    width: 60%;
  }
`

export const EmptyCheckoutGrid = styled.div`
  display: flex;
  flex-direction: column;

  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  @media screen and (min-width: 1366px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0 * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0 * var(--tw-space-y-reverse));
    }
  }
`
