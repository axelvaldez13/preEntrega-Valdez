export default (): void => {
  const id = 'modalWrapper'
  const htmlElement = document.createElement('div')
  htmlElement.className = 'z-50'
  htmlElement.id = 'modalWrapper'

  if (document.getElementById(id) !== null) {
    document.getElementById(id)
  } else {
    document.body.appendChild(htmlElement)
  }
}
