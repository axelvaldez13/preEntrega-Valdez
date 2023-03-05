import Footer from '@modules/Footer'
import Navbar from '@modules/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from '@modules/Hero'
import HighlightView from '@modules/HighlightView'
import { Layout } from '@moduleStyled/Layout'
import HowWorksView from '@modules/HowWorksView'
import MostBoughtView from '@modules/MostBoughtView'
import CategoryListView from '@modules/CategoryListView'
import { CartContextProvider } from '@utilities/CartContext'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Layout>
            <Hero title="Descubre un banco de imágenes hecho en Argentina" subtitle="Compra stocks de imagenes para utilizar en tu emprendimiento en pesos" />
            <HighlightView />
            <HowWorksView />
            <MostBoughtView />
            <CategoryListView />
            <Footer />
          </Layout>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}
export default App
