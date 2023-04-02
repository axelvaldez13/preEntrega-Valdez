import HowWorksView from '@modules/home/HowWorksView'
import MostBoughtView from '@modules/home/MostBoughtView'
import CategoryListView from '@modules/home/CategoryListView'
import HighlightView from '@modules/home/HighlightView'
import Hero from '@modules/home/Hero'

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
