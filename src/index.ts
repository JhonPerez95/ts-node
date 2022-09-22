import { getPokemon } from './generics/getPokemon'

getPokemon(3)
  .then((res) => console.log(res.name))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finalizo la getPokemon'))
