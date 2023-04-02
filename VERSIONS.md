## Primera pre entrega (0.0.1)

- Se instalaron dependencias: eslint, typescript, husky, prettier, styled-components, types de styled-components
- Se creo el componente NavBar donde se encuentra el menu
- Se creo el componente NavBar donde se encuentra el menu CartWidget.js ubicado en el navbar
- Se creo el componente ItemListContainer

## Segunda pre entrega (0.0.2)

- Se instalo la dependencia react-router-dom
- Se actualizaron las rutas para el catalogo y el detalle del producto
- Se mockeo la data de los productos a agregar proximanente cuando se agreguen los servicios de firebase para practicar las promises
- Se agregaron loaders para la carga asincronica de las promesas

## Entrega final (1.0.0)

- Se instalo la dependencia firebase para el backend
- Se creo el CartContext para poder handlear la data en el contexto de la aplicacion
- Se creo la pagina de checkout para validar informacion de los usuarios previo a hacer la compra.

## Recuperatorio final (1.1.0)

- Completar el README.md
  - Breve description del proyecto
  - Sumar dependencias y versiones
  - Sumar deploy
- Se instalo lint-staged y se modifico el package-json para que al hacer el comit revise el tipado y formatee el codigo.
- Se refactorizo el App.tsx eliminando alli el context y el router para insertarlo en el main.tsx de manera actualizada a la documentacion de react-router-dom
- Se movieron a diferentes carpetas los modulos de la home, layout y entregables para el proyecto (disclaimer: el navbar.tsx se encuentra en la carpeta layout)
- Se eliminaron archivos de styled innecesarios para centrarlos en un solo archivo (HomeStyled, ItemListStyled, ItemDetailStyled y CartStyled)
