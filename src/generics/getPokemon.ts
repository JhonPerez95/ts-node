import axios from 'axios'
import { ResponseAPIPokemon } from '../interface/response'

export const getPokemon = async (
  pokemonId: number
): Promise<ResponseAPIPokemon> => {
  const { data } = await axios.get<ResponseAPIPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  )
  console.log('Hola Mundo !')
  return data
}
