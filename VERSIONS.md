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
- Se agrego el boton secundario para ir al carrito directamente desde el detalle del producto
- Se refactorizo las primeras llamadas a la home uniendola en una promise all sola y se refactorizo el tipado de los servicios
- Se fixeo el carrito al agregar duplicados y se sumo el total del carrito
- Se agregaron mensajes de errores en caso que no haya ningun dato ni los mails coincidan
- Se actualizaron las siguientes dependencias:

| dependencias                           | Vieja version | Actualizada |
| :------------------------------------- | :------------ | ----------- |
| @types/node                            | `18.11.19`    | `18.15.11`  |
| @types/react                           | `18.0.27`     | `18.0.31`   |
| @types/react-dom                       | `18.0.10`     | `18.0.11`   |
| @typescript-eslint/eslint-plugin       | `5.50.0`      | `5.57.0`    |
| esbuild                                | `0.17.10`     | `0.17.15`   |
| eslint                                 | `8.33.0`      | `8.37.0`    |
| eslint-config-prettier                 | `8.6.0`       | `8.8.0`     |
| eslint-config-standard-with-typescript | `31.0.0`      | `34.0.1`    |
| eslint-plugin-n                        | `15.6.1`      | `5.7.0`     |
| firebase                               | `9.17.2`      | `9.19.1`    |
| prettier                               | `2.8.3`       | `2.8.7`     |
| react-router-dom                       | `6.8.0`       | `6.10.0`    |
| styled-components                      | `5.3.6`       | `5.3.9`     |
| typescript                             | `4.9.5`       | `5.0.3`     |
| vite                                   | `4.1.1`       | `4.2.1`     |
