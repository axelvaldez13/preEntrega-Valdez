import { Container, EmptyCheckoutGrid, ListCart, ListCartImage, TitleHeading } from '@moduleStyled/CheckoutStyled'
import { type ChangeEvent, useContext, useState, useEffect } from 'react'
import theme from '@styles/Theme'
import { CartContext } from '@utilities/CartContext'
import { HeadingOne, HeadingThree, HeadingTwo, Paragraph } from '@sharedComponents/Fonts'
import { Input } from '@sharedComponents/Inputs'
import { Button } from '@sharedComponents/Buttons'
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore'
import { LoaderFixed } from '@sharedComponents/LoaderMessage'
import { type IItemList } from '@typesProyect/ItemDetailTypes'
import ItemList from './ItemList'

interface IOrder {
  buyer: { name: string; email: string }
  items: IItemList[] | undefined
  total: number
}

const Checkout: React.FC = () => {
  const contextProvider = useContext(CartContext)
  const [mostList, setMostList] = useState<IItemList[]>([])
  const hasContent = typeof contextProvider !== 'undefined' && contextProvider?.cartList.length > 0
  const [loader, setLoader] = useState(false)
  const [isOrdered, setOrdered] = useState(false)
  const [name, setName] = useState('')
  const [idCompra, setIdCompra] = useState('')
  const [email, setEmail] = useState('')

  const insertOrder = async (): Promise<void> => {
    setLoader(true)
    const order: IOrder = { buyer: { name: '', email: '' }, items: [], total: 0 }
    order.buyer = { name, email }
    order.items = contextProvider?.cartList.map(list => {
      return list
    })
    order.total = 1230

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    await addDoc(ordersCollection, order)
      .then(response => {
        setIdCompra(response.id)
        setOrdered(true)
      })
      .finally(() => {
        setLoader(false)
      })
  }

  const getMostList = async (): Promise<void> => {
    setLoader(true)
    const db = getFirestore()
    const mostboughtQueries = doc(db, 'creargtive', 'mostbought')
    await getDoc(mostboughtQueries)
      .then(response => {
        setMostList(response.data()?.mostbought as IItemList[])
      })
      .finally(() => {
        setLoader(false)
      })
  }

  useEffect(() => {
    void getMostList()
  }, [])

  return (
    <>
      <Container>
        {loader ? (
          <LoaderFixed />
        ) : isOrdered ? (
          <div>
            <HeadingOne>Felicitaciones</HeadingOne>
            <HeadingTwo color={theme.color.gray[400]} fontWeight={200}>
              Tu orden se realizo con exito, el id de tu compra es {idCompra}
            </HeadingTwo>
          </div>
        ) : (
          <>
            <TitleHeading>
              <HeadingOne>Carrito</HeadingOne>
              <HeadingTwo color={theme.color.gray[400]} fontWeight={200}>
                {hasContent
                  ? 'Revisa todas las imagenes que tenes en tu carrito y llena el formulario para confirmar la compra.'
                  : 'No tenes ninguna imagen agregado al carrito. No te preocupes, hoy te podemos recomendar las imagenes mas buscadas del mes'}
              </HeadingTwo>
            </TitleHeading>
            {hasContent ? (
              <div className="columnsCart">
                <div className="rowsCart">
                  {contextProvider?.cartList.map((list, index) => {
                    return (
                      <ListCart key={index}>
                        <div className="cartInfo">
                          <ListCartImage backgroundImage={list.imageUrl} />
                          <Paragraph>
                            {list.name} - {list.autor}
                          </Paragraph>
                        </div>
                        <HeadingThree fontWeight={600} color={theme.color.primary[400]}>
                          $ {list.precio}
                        </HeadingThree>
                      </ListCart>
                    )
                  })}
                </div>

                <div className="formList">
                  <HeadingTwo>Datos personales</HeadingTwo>
                  <form>
                    <Input
                      title="Nombre y apellido"
                      id="name"
                      value={name}
                      handleChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const target = (event.target as HTMLInputElement).value
                        setName(target)
                      }}
                    />
                    <Input
                      title="Email"
                      id="email"
                      value={email}
                      handleChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const target = (event.target as HTMLInputElement).value
                        setEmail(target)
                      }}
                    />
                    <Button
                      onClick={async e => {
                        e.preventDefault()
                        await insertOrder()
                      }}
                      type="submit"
                    >
                      Comprar
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <EmptyCheckoutGrid>
                <ItemList listContent={mostList} />
              </EmptyCheckoutGrid>
            )}
          </>
        )}
      </Container>
    </>
  )
}

export default Checkout
