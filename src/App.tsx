import Footer from '@modules/Footer'
import Navbar from '@modules/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from '@modules/ItemDetailContainerView'
import Hero from '@modules/Hero'
import HighlightView from '@modules/HighlightView'
import { Layout } from '@moduleStyled/Layout'
import HowWorksView from '@modules/HowWorksView'
import MostBoughtView from '@modules/MostBoughtView'
import CategoryListView from '@modules/CategoryListView'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Hero title="Descubre un banco de imágenes hecho en Argentina" subtitle="Compra stocks de imagenes para utilizar en tu emprendimiento en pesos" />
          <HighlightView />
          <HowWorksView />
          <MostBoughtView />
          <CategoryListView />
          <Footer />
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App
