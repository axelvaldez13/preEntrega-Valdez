import HowWorksView from '@modules/HowWorksView'
import MostBoughtView from '@modules/MostBoughtView'
import CategoryListView from '@modules/CategoryListView'
import HighlightView from '@modules/HighlightView'
import Hero from '@modules/Hero'

const Home: React.FC = () => {
  return (
    <>
      <Hero title="Descubre un banco de imágenes hecho en Argentina" subtitle="Compra stocks de imagenes para utilizar en tu emprendimiento en pesos" />
      <HighlightView />
      <HowWorksView />
      <MostBoughtView />
      <CategoryListView />
    </>
  )
}

export default Home
