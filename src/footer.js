const top = document.createElement('div')
top.innerText = 'top of footer'
const bottom = document.createElement('div')
bottom.innerText = 'bottom of footer'

const footer = document.createElement('footer')
footer.appendChild(top)
footer.appendChild(bottom)

export { top, bottom, footer }