import {
  printObj,
  genericFuctin,
  genericFuctinArrow,
} from '../generics/generics'
import { Hero, Villain } from '../interface/'

// printObj(2342345)
// printObj("Nombre")
// printObj(new Date().getTime())
// printObj('2323')

// console.log(genericFuctin(233).toFixed(2))
// console.log(genericFuctin('Hola Mundo').toLowerCase())
// console.log(genericFuctinArrow('Hola Mundo').toLowerCase())
// console.log(genericFuctinArrow('Hola Mundo').toLowerCase())

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade winston',
  dangerLevel: 234,
}

console.log(genericFuctinArrow<Villain>(deadpool).dangerLevel)
console.log(genericFuctinArrow<Hero>(deadpool).realName)
