import styled from 'styled-components'
import theme from '@styles/Theme'

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
