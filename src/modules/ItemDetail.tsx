import { Container, ImageDetail } from '@moduleStyled/ItemDetailStyled'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import AddItemButton from './AddItemButton'
import Description from './Description'

const ItemDetail: React.FC<{ item: IItemList }> = ({ item }) => {
  const { imageUrl } = item

  return (
    <>
      <Container>
        <ImageDetail backgroundImage={imageUrl} />
        <div className="infoPhoto">
          <Description item={item} />
          <AddItemButton item={item} />
        </div>
      </Container>
    </>
  )
}

export default ItemDetail
