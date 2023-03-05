import Footer from '@modules/Footer'
import Navbar from '@modules/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@moduleStyled/Layout'
import { CartContextProvider } from '@utilities/CartContext'
import Home from './Home'
import ItemListContainer from '@modules/ItemListContainer'
import ItemDetail from '@modules/ItemDetail'
import CartContainer from '@modules/CartContainer'

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
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetail />} />
              <Route path="/cart" element={<CartContainer />} />
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
