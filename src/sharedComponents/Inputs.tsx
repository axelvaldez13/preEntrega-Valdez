import styled from 'styled-components'
import colors from '../styles/Colors'

const InputView = styled.div`
  position: relative;

  .icon {
    position: absolute;
    width: 24px;
    height: 24px;
    color: ${colors.gray[400]};
    top: 0;
    bottom: 0;
    left: 8px;
    margin: auto 0;
  }

  input {
    border: 1px solid ${colors.gray[200]};
    padding: 16px 40px;
    border-radius: 4px;
    background: ${colors.white};
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
}
export const Input: React.FC<IInput> = (props: IInput) => {
  return (
    <InputView>
      {<div className="icon">{props.icon}</div> ?? null}
      {<label htmlFor="lname">{props.title}</label>}
      <input placeholder={props.placeholder} type={props.type ?? 'text'} id={props.id} name={props.name} value={props.value} />
    </InputView>
  )
}
