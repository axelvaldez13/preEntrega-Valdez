import { Container, ImageDetail } from '@moduleStyled/ItemDetailStyled'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import AddItemButton from './AddItemButton'
import Description from './Description'
import { HeadingThree } from '@sharedComponents/Fonts'
import ItemQuantitySelector from './ItemQuantitySelector'
import { useEffect, useState } from 'react'

const ItemDetail: React.FC<{ item: IItemList }> = ({ item }) => {
  const { imageUrl, name, id, precio, categoria, autor } = item
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    if (quantity === 0) setQuantity(1)
  }, [quantity])

  return (
    <>
      <Container>
        <ImageDetail backgroundImage={imageUrl} />
        <div className="infoPhoto">
          <Description item={item} />
          <div className="quantityTitle">
            <HeadingThree fontWeight={600}>Cantidad</HeadingThree>
            <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
          <AddItemButton item={{ imageUrl, name, id, precio, categoria, autor, cantidad: quantity }} />
        </div>
      </Container>
    </>
  )
}

export default ItemDetail
