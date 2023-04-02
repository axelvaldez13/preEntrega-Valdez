import styled from 'styled-components'
import theme from '../styles/Theme'
import { type ChangeEvent } from 'react'

const InputView = styled.div`
  position: relative;
  > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }

  .icon {
    position: absolute;
    width: 24px;
    height: 24px;
    color: ${theme.color.gray[400]};
    top: 0;
    bottom: 0;
    left: 8px;
    margin: auto 0;
  }

  label {
    color: ${theme.color.gray[400]};
  }

  input {
    border: 1px solid ${theme.color.gray[200]};
    background: ${theme.color.gray[800]};
    padding: 16px 40px;
    border-radius: 4px;
    color: ${theme.color.gray[400]};
    display: flex;
    font: 12px/16px 'Montserrat Alternates', sans-serif;
  }
`

interface IInput {
  type?: string
  id?: string
  name?: string
  value?: string
  placeholder?: string
  title?: string
  icon?: JSX.Element
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const Input: React.FC<IInput> = (props: IInput) => (
  <InputView>
    {<div className="icon">{props.icon}</div> ?? null}
    {<label htmlFor="lname">{props.title}</label>}
    <input placeholder={props.placeholder} type={props.type ?? 'text'} id={props.id} name={props.name} value={props.value} onChange={props.handleChange} />
  </InputView>
)
