import { Logo } from '@sharedComponents/Logo'
import { Paragraph } from '@sharedComponents/Fonts'
import { FooterView } from '@moduleStyled/FooterStyled'
import { Link } from 'react-router-dom'

const listCategories = [
  {
    title: '',
    sections: [
      {
        subSection: '',
        linkTo: '/'
      },
      {
        subSection: '',
        linkTo: '/'
      },
      {
        subSection: '',
        linkTo: '/'
      },
      {
        subSection: '',
        linkTo: '/'
      }
    ]
  },
  {
    title: 'Categorias',
    sections: [
      {
        subSection: 'Arquitectura',
        linkTo: '/category/arquitectura'
      },
      {
        subSection: 'Paisajes',
        linkTo: '/category/paisaje'
      },
      {
        subSection: 'Publicitaria',
        linkTo: '/category/publicitaria'
      }
    ]
  },
  {
    title: 'Contacto',
    sections: [
      {
        subSection: 'Whatsapp',
        linkTo: '/'
      },
      {
        subSection: 'Email',
        linkTo: '/'
      },
      {
        subSection: 'Telegram',
        linkTo: '/'
      }
    ]
  },
  {
    title: 'Descarga la app',
    sections: [
      {
        subSection: 'iOS',
        linkTo: '/'
      },
      {
        subSection: 'Android',
        linkTo: '/'
      }
    ]
  }
]

const Footer: React.FC = () => {
  return (
    <FooterView>
      <div className="firstContainer">
        <div className="footerLogo">
          <Logo />
          <Paragraph>Creargtive es un sitio para que cualquier usuario pueda comprar o vender de imágenes capturadas por ellos mismos. </Paragraph>
        </div>
        {listCategories.map((list, index) => {
          return (
            <div key={index}>
              <Paragraph fontWeight={600}>{list.title}</Paragraph>
              {list.sections.map((section, index) => {
                return (
                  <Paragraph key={index} fontWeight={400}>
                    <Link to={section.linkTo}>{section.subSection}</Link>
                  </Paragraph>
                )
              })}
            </div>
          )
        })}
      </div>
      <hr />
      <div className="footerCopyright">
        <Paragraph>Creargtive @ 2023</Paragraph>
        <Paragraph>Trabajo Practico - React@Coderhouse</Paragraph>
      </div>
    </FooterView>
  )
}

export default Footer
