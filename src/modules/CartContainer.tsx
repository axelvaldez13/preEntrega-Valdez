import { Container, ListCart, ListCartImage } from '@moduleStyled/CartContainerStyled'
import { ChangeEvent, useContext, useState } from 'react'
import theme from '@styles/Theme'
import { CartContext } from '@utilities/CartContext'
import { HeadingOne, HeadingThree, HeadingTwo, Paragraph } from '@sharedComponents/Fonts'
import { Input } from '@sharedComponents/Inputs'
import { Button } from '@sharedComponents/Buttons'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { LoaderMessage } from '@sharedComponents/LoaderMessage'

interface IOrder {
  buyer: { name: string; email: string }
  items: Array<Record<string, string | number>> | undefined
  total: number
}
const CartContainer: React.FC = () => {
  const contextProvider = useContext(CartContext)
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

  return (
    <>
      <Container>
        {loader ? (
          <LoaderMessage />
        ) : isOrdered ? (
          <div>
            <HeadingOne>Felicitaciones</HeadingOne>
            <HeadingTwo color={theme.color.gray[400]} fontWeight={200}>
              Tu orden se realizo con exito, el id de tu compra es {idCompra}
            </HeadingTwo>
          </div>
        ) : (
          <>
            <div>
              <HeadingOne>Carrito</HeadingOne>
              <HeadingTwo color={theme.color.gray[400]} fontWeight={200}>
                {hasContent
                  ? 'Revisa todas las imagenes que tenes en tu carrito y llena el formulario para confirmar la compra.'
                  : 'No tenes agregado ninguna imagen, por favor, elige una imagen que mas te guste.'}
              </HeadingTwo>
            </div>
            {hasContent && (
              <div className="columnsCart">
                <div className="rowsCart">
                  {contextProvider?.cartList.map((list, index) => {
                    return (
                      <ListCart key={index}>
                        <div className="cartInfo">
                          <ListCartImage backgroundImage={list.imageUrl as string} />
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
            )}
          </>
        )}
      </Container>
    </>
  )
}

export default CartContainer
