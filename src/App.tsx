import Footer from '@modules/layout/Footer'
import Navbar from '@modules/layout/Navbar'
import { Layout } from '@moduleStyled/Layout'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
        <Footer />
      </Layout>
    </>
  )
}
export default App
