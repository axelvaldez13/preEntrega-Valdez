import styled from 'styled-components'
import colors from '../styles/Colors'

const InputView = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.gray[200]};
  padding: 12px 32px;
  border-radius: 4px;
  font: 12px/16px 'Montserrat Alternates', sans-serif;
`

interface IInput {
  type?: string
  id?: string
  name?: string
  value?: string
  placeholder?: string
}
export const Input: React.FC<IInput> = (props: IInput) => {
  return <InputView placeholder={props.placeholder} type={props.type ?? 'text'} id={props.id} name={props.name} value={props.value} />
}
