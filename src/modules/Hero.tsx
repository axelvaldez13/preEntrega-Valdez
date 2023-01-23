import styled from 'styled-components'
import { Heading, Paragraph } from '../sharedComponents/Fonts'
import colors from '../styles/Colors'

interface IHero {
  title: string
  subtitle: string
}

const HeroBackground = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), url('../../public/chalten-editadas/Chalten-laguna.jpg') center center;
  padding: 96px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${colors.white};

  > h1 {
    margin-bottom: 8px;
  }
`

const Hero: React.FC<IHero> = (props: IHero) => {
  return (
    <HeroBackground>
      <Heading>{props.title}</Heading>
      <Paragraph>{props.subtitle}</Paragraph>
    </HeroBackground>
  )
}

export default Hero
