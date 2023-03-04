import { CategoryListContainer } from '@moduleStyled/CategoryListStyled'
import { HeadingTwo, Paragraph } from '@sharedComponents/Fonts'
import { Heart, Globe, User, GlassPlus } from '@sharedComponents/Icons'

const categoriesList = [
  {
    title: 'Arquitectura',
    icon: <Heart />,
    subtitle: 'Encontra edificios antiguos o nuevas construcciones.'
  },
  {
    title: 'Paisajes',
    icon: <Globe />,
    subtitle: 'Descubri los bosques, montañas, playas, entre otros paisajes dentro del pais.'
  },
  {
    title: 'Publicitario',
    icon: <User />,
    subtitle: 'Busca productos originarios, alimentos, objetos, entre otros.'
  },
  {
    title: 'Macro',
    icon: <GlassPlus />,
    subtitle: 'Descubri fotos ineditas de nuestra fauna o flora.'
  }
]

const CategoryListView: React.FC = () => {
  return (
    <CategoryListContainer>
      <HeadingTwo>Busca tu categoria favorita.</HeadingTwo>
      <div className="columnContainer">
        {categoriesList.map((list, index) => {
          return (
            <div className="columnsList" key={index}>
              <div className="listIcon">{list.icon}</div>
              <div>
                <Paragraph fontWeight={600}>{list.title}</Paragraph>
                <Paragraph>{list.subtitle}</Paragraph>
              </div>
            </div>
          )
        })}
      </div>
    </CategoryListContainer>
  )
}

export default CategoryListView
