import './footer.css'
import './button.css'
import { top, bottom, footer } from './footer'
import nav from './nav'
import makeButton from './button'
import { red, blue } from './button-styles'

const button = makeButton('Yay! My button')
button.style = red
document.body.appendChild(button)
document.body.appendChild(footer)