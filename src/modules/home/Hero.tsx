import { HeadingOne, HeadingTwo } from '@sharedComponents/Fonts'
import theme from '@styles/Theme'
import { HeroContainer } from '@moduleStyled/HomeStyled'
import { type IHero } from '@typesProyect/HomeTypes'

const Hero: React.FC<IHero> = ({ title, subtitle }) => {
  return (
    <HeroContainer>
      <HeadingOne>{title}</HeadingOne>
      <HeadingTwo color={theme.color.gray[400]} fontWeight={200}>
        {subtitle}
      </HeadingTwo>
    </HeroContainer>
  )
}

export default Hero
