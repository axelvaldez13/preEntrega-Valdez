import { MostBoughtContainer } from '@moduleStyled/HomeStyled'
import { HeadingTwo } from '@sharedComponents/Fonts'
import ItemList from '@modules/ItemList'
import { type IItemList } from '@typesProyect/ItemDetailTypes'

const MostBoughtView: React.FC<{ mostList: IItemList[] }> = ({ mostList }) => {
  return (
    <>
      <MostBoughtContainer>
        <ItemList listContent={mostList} />
        <HeadingTwo>Estas son las imagenes mas compradas del dia.</HeadingTwo>
      </MostBoughtContainer>
    </>
  )
}

export default MostBoughtView
