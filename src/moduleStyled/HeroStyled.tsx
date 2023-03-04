import styled from 'styled-components'

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
