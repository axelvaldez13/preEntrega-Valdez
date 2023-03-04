import { HeadingOne, HeadingTwo } from '@sharedComponents/Fonts'
import theme from '@styles/Theme'
import { HeroContainer } from '@moduleStyled/HeroStyled'

interface IHero {
  title: string
  subtitle: string
}

const Hero: React.FC<IHero> = (props: IHero) => {
  return (
    <HeroContainer>
      <HeadingOne>{props.title}</HeadingOne>
      <HeadingTwo color={theme.color.gray[400]} fontWeight={200}>
        {props.subtitle}
      </HeadingTwo>
    </HeroContainer>
  )
}

export default Hero
