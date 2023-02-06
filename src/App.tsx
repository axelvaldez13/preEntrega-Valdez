import Footer from './modules/Footer'
import ItemListContainer from './modules/ItemListContainer'
import Navbar from './modules/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailContainer from './modules/ItemDetailContainer'
import styled from 'styled-components'
import Hero from './modules/Hero'

const Layout = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;

  .rowActions {
    display: flex;
    align-items: end;
    justify-content: end;
  }
`

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero
          title="Descubre un mundo de imágenes hecho en Argentina"
          subtitle="Compra stocks de imágenes para utilizar en tu emprendimiento en pesos argentinos "
        />
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Footer />
    </>
  )
}
export default App
