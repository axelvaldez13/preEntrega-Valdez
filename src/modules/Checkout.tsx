import { Container, EmptyCheckoutGrid, ListCart, ListCartImage, TitleHeading } from '@moduleStyled/CheckoutStyled'
import { type ChangeEvent, useState, useEffect } from 'react'
import theme from '@styles/Theme'
import { type Context, useCartContext } from '@utilities/CartContext'
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
  const { cartList, totalPrice, totalQuantity, emptyCart } = useCartContext() as Context
  const [mostList, setMostList] = useState<IItemList[]>([])
  const [loader, setLoader] = useState(false)
  const [isOrdered, setOrdered] = useState(false)
  const [name, setName] = useState('')
  const [idCompra, setIdCompra] = useState('')
  const [email, setEmail] = useState('')
  const [repeatEmail, setRepeatEmail] = useState('')
  const [errorMesssage, setErrorMessage] = useState('')
  const [canSubmit, setSubmit] = useState(true)

  const insertOrder = async (): Promise<void> => {
    setLoader(true)
    const order: IOrder = { buyer: { name: '', email: '' }, items: [], total: 0 }
    order.buyer = { name, email }
    order.items = cartList.map(list => {
      return list
    })
    order.total = totalPrice()

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    await addDoc(ordersCollection, order)
      .then(response => {
        setIdCompra(response.id)
        setOrdered(true)
        emptyCart()
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

  const isAValidEmail = (): void => {
    const regexEmail = /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/gm
    const isSameEmail = email.toLocaleLowerCase() === repeatEmail.toLocaleLowerCase()
    try {
      if (name.length === 0 && email.length === 0 && repeatEmail.length === 0) setSubmit(false)
      else if (name.length > 0 && !regexEmail.test(email)) throw Error('El mail ingresado es invalido')
      else if (!isSameEmail) {
        throw Error('Los mails ingresados no coinciden')
      } else {
        setSubmit(true)
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
        setSubmit(false)
        setTimeout(() => {
          setErrorMessage('')
        }, 3000)
      }
    }
  }
  useEffect(() => {
    isAValidEmail()
    void getMostList()
  }, [])

  useEffect(() => {
    isAValidEmail()
    // console.log(canSubmit)
  }, [email, repeatEmail])

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
                {cartList.length > 0
                  ? 'Revisa todas las imagenes que tenes en tu carrito y llena el formulario para confirmar la compra.'
                  : 'No tenes ninguna imagen agregado al carrito. No te preocupes, hoy te podemos recomendar las imagenes mas buscadas del mes'}
              </HeadingTwo>
            </TitleHeading>
            {cartList.length > 0 ? (
              <>
                <div className="columnsCart">
                  <div className="rowsCart">
                    {cartList.map((list, index) => {
                      return (
                        <ListCart key={index}>
                          <div className="cartInfo">
                            <ListCartImage backgroundImage={list.imageUrl} />
                            <Paragraph>
                              {list.name} - Autor: {list.autor} - Categoria: {list.categoria}
                            </Paragraph>
                          </div>
                          <div className="priceInfo">
                            <HeadingThree fontWeight={600} color={theme.color.primary[400]}>
                              $ {(list.precio ?? 0) * list.cantidad}
                            </HeadingThree>
                            <Paragraph>Precio por unidad: ${list.precio}</Paragraph>
                            <Paragraph>Cantidad: {list.cantidad}</Paragraph>
                          </div>
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

                      <Input
                        title="Validar email"
                        id="validatedMail"
                        value={repeatEmail}
                        handleChange={(event: ChangeEvent<HTMLInputElement>) => {
                          const target = (event.target as HTMLInputElement).value
                          setRepeatEmail(target)
                        }}
                      />

                      <HeadingThree>Cantidad de productos elegidos: {totalQuantity()}</HeadingThree>
                      <HeadingThree>Precio total: ${totalPrice()}</HeadingThree>
                      {errorMesssage.length > 0 && <HeadingThree color={theme.color.danger[400]}>{errorMesssage}</HeadingThree>}
                      <Button
                        isDisabled={!canSubmit}
                        onClick={async e => {
                          e.preventDefault()
                          if (name.length > 0 && canSubmit) await insertOrder()
                        }}
                        type="submit"
                      >
                        Comprar
                      </Button>
                    </form>
                  </div>
                </div>
              </>
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
