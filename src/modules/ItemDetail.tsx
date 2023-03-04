import { Paragraph } from '@sharedComponents/Fonts'
import { Card, CardImage } from '@moduleStyled/Layout'
import theme from '@styles/Theme'
import ItemCount from './ItemCount'

type IList = Record<string, string | number>

interface IListDetail {
  listContent: IList[]
}

export const ItemDetail: React.FC<IListDetail> = ({ listContent }) => {
  return (
    <>
      {listContent.map((content, index) => {
        return (
          <Card key={index}>
            <CardImage backgroundImage={content.img}>
              <div>
                <Paragraph className="title">{content.category}</Paragraph>
              </div>
            </CardImage>
            <div className="cardInfoContainer">
              <div className="cardName">
                <Paragraph fontWeight={200}>
                  {content.name} - {content.creator}
                </Paragraph>
                <Paragraph fontWeight={600} color={theme.color.primary[400]}>
                  ${content.price} ARS
                </Paragraph>
              </div>
              <ItemCount />
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default ItemDetail
