import './footer.css'
import './button.css'
import { top, bottom, footer } from './footer'
import nav from './nav'
import makeButton from './button'
import { red, blue } from './button-styles'
import imgUrl from './webpack.logo.jpeg'
import makeImage from './image'
import Foo from './foo.ts'

const button = makeButton('Yay! My button')
const image = makeImage(imgUrl)
button.style = red
document.body.appendChild(button)
document.body.appendChild(footer)
document.body.appendChild(image)