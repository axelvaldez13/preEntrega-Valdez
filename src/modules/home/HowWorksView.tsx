import { HowWorksContainer } from '@moduleStyled/HomeStyled'
import { HeadingTwo, Paragraph } from '@sharedComponents/Fonts'
import { User, ShoppingCart, CurrencyDollar, Download } from '@sharedComponents/Icons'

const listHowWorks = [
  {
    id: 0,
    icon: <User />,
    title: 'Creas tu cuenta',
    text: 'En segundos, gratuito y en simples pasos.'
  },
  {
    id: 1,
    icon: <ShoppingCart />,
    title: 'Compra o vende imágenes',
    text: 'Seleccionas las fotos que mas te gustan para descargar o subir.'
  },
  {
    id: 2,
    icon: <CurrencyDollar />,
    title: 'Elegi tu metodo de pago',
    text: 'Aceptamos todas las tarjetas y otros medios de pago.'
  },
  {
    id: 3,
    icon: <Download />,
    title: 'Recibis tu imágen',
    text: 'Una vez acreditado el pago recibiras la descarga.'
  }
]
const HowWorksView: React.FC = () => {
  return (
    <HowWorksContainer>
      <div className="textHeading">
        <HeadingTwo>¿Como funciona Creargtive?</HeadingTwo>
        <Paragraph>Tocas las dudas que necesitas aclarar sobre nuestra plataforma está acá.</Paragraph>
      </div>
      <div className="columnContainer">
        {listHowWorks.map(list => {
          return (
            <div className="columnsList" key={list.id}>
              <div className="iconList">{list.icon}</div>
              <Paragraph fontWeight={600}>{list.title}</Paragraph>
              <Paragraph>{list.text}</Paragraph>
            </div>
          )
        })}
      </div>
    </HowWorksContainer>
  )
}

export default HowWorksView
