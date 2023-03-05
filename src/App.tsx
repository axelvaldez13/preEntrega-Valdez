import Footer from '@modules/Footer'
import Navbar from '@modules/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@moduleStyled/Layout'
import { CartContextProvider } from '@utilities/CartContext'
import Home from './Home'
import ItemListContainer from '@modules/ItemListContainer'
import ItemDetailContainer from '@modules/ItemDetailContainer'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/category" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </Layout>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}
export default App
