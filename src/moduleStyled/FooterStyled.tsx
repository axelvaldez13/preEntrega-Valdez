import styled from 'styled-components'
import theme from '@styles/Theme'

export const FooterView = styled.footer`
  background: ${theme.color.gray[900]};
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  .footerLogo {
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
  }

  .footerCopyright {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .firstContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(5, 4fr);
    }
    > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
  }

  hr {
    margin: 1rem 0;
    border: 0.5px solid ${theme.color.gray[800]};
  }
`
