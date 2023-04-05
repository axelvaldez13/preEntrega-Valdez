import { HeadingThree, HeadingTwo } from '@sharedComponents/Fonts'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import theme from '@styles/Theme'
import { DescriptionContainer } from '@moduleStyled/ItemDetailStyled'
import { Link } from 'react-router-dom'
import { ChevronRight } from '@sharedComponents/Icons'

const Description: React.FC<{ item: IItemList }> = ({ item }) => {
  const { name, precio, autor, categoria } = item
  return (
    <DescriptionContainer>
      <ul className="breadCrumb">
        <li>
          <Link to={'/galeria'}>Galeria</Link>
        </li>
        <li>
          <ChevronRight />
        </li>
        <li>
          <Link to={`/category/${categoria}`}>{categoria}</Link>
        </li>
        <li>
          <ChevronRight />
        </li>
        <li>
          {name} - {autor}
        </li>
      </ul>
      <div className="titleDescription">
        <HeadingTwo fontWeight={600}>
          {name} - {autor}
        </HeadingTwo>
        <HeadingTwo fontWeight={400} color={theme.color.primary[400]}>
          $ {precio}
        </HeadingTwo>
      </div>

      <HeadingThree fontWeight={200}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </HeadingThree>
    </DescriptionContainer>
  )
}

export default Description
