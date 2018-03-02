import 'bootstrap'
import './../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}

var mul = (x, y) => { return x * y }
// eslint-disable-next-line
console.log(mul(5, 5))
