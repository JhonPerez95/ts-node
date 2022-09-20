import { Hero } from './class/Hero'
import powers, { Power } from './data/power'

const iroman = new Hero('Iron', 2, 34)

console.log(powers.map((item: Power) => item))
console.log(iroman.power)
