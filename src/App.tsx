import Hero from './modules/Hero'
import ItemListContainer from './modules/ItemListContainer'
import Navbar from './modules/Navbar'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Descubre un mundo de imágenes hecho en Argentina"
        subtitle="Compra stocks de imágenes para utilizar en tu emprendimiento en pesos argentinos "
      />
      <ItemListContainer />
    </>
  )
}
export default App
