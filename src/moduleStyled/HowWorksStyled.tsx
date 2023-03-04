import styled from 'styled-components'
import theme from '@styles/Theme'

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
