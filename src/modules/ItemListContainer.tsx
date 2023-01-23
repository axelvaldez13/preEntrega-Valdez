import styled from 'styled-components'
import { Input } from '../sharedComponents/Inputs'
import { SecondaryButton } from '../sharedComponents/Buttons'
import { Funnel } from '../sharedComponents/Icons'

const Layout = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;

  .rowActions {
    display: flex;
    justify-content: space-between;
  }
`
const ItemListContainer: React.FC = () => {
  return (
    <Layout>
      <div className="rowActions">
        <Input placeholder={'EJ: Buenos Aires'} />
        <SecondaryButton>
          <span className="icon">
            <Funnel />
          </span>
          Filtros
        </SecondaryButton>
      </div>
      <div></div>
    </Layout>
  )
}

export default ItemListContainer
