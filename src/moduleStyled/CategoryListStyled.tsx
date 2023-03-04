import styled from 'styled-components'
import theme from '@styles/Theme'

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
