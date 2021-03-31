const detailsList = document.querySelectorAll('details')

const expand = () => {
  detailsList.forEach((details) => {
    details.removeAttribute('open')
  })
}

detailsList.forEach((details) => {
  details.querySelector('summary').addEventListener('click', expand)
})
