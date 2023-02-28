import styled from 'styled-components'
import { Heading, Paragraph } from '@sharedComponents/Fonts'
import theme from '../styles/Theme'
import { Input } from '@sharedComponents/Inputs'
import { Glass } from '@sharedComponents/Icons'

interface IHero {
  title: string
  subtitle: string
}

const HeroBackground = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), url('/chalten-editadas/Chalten-laguna.jpg') center center/ cover;
  padding: 80px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${theme.color.white};
  position: relative;
  margin-bottom: 32px;

  > h1 {
    margin-bottom: 8px;
  }

  .inputAbsolute {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    width: 80%;
    bottom: -16px;
    border-radius: 8px;
    background: none;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    input {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
`

const Hero: React.FC<IHero> = (props: IHero) => {
  return (
    <>
      <HeroBackground>
        <Heading>{props.title}</Heading>
        <Paragraph>{props.subtitle}</Paragraph>
        <div className="inputAbsolute">
          <Input placeholder={'EJ: Buenos Aires'} icon={<Glass />} />
        </div>
      </HeroBackground>
    </>
  )
}

export default Hero
