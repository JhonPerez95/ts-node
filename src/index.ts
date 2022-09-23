// import { getPokemon } from './generics/getPokemon'

import { Pokemon } from './decorators/Pokemon'

// getPokemon(3)
//   .then((res) => console.log(res.name))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('Finalizo  getPokemon'))

const charmander = new Pokemon('Charmander')

// (Pokemon.prototype as any).customName = 'Pikachu'
charmander.savePokemonToDB(150)
// console.log(charmander)
