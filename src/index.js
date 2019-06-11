import './footer.css'
import './button.css'
import { footer } from './footer.js'
import makeButton from './button.js'
import { red } from './button-styles.js'
import imgUrl from './webpack.logo.jpeg'
import makeImage from './image.js'

const button = makeButton('Yay! My button')
const image = makeImage(imgUrl)
button.style = red
document.body.appendChild(button)
document.body.appendChild(footer)
document.body.appendChild(image)