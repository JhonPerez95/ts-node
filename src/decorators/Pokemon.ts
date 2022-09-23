function printToConsole(constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole
  } else {
    return () => {}
  }
}

const bloquearPrototype = function (constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originMethod = descriptor.value

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error(
          'El id pokemon es incorrecto ! debe estar en 1 a 800'
        )
      } else {
        return originMethod(id)
      }
    }
  }
}

function readonly(isWritable: boolean): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        return 'Jhon'
      },
      set(this, val) {
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        })
      },
    }
    return descriptor
  }
}

@bloquearPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readonly(true)
  public publicApi: string = 'https://pokeapi.co'

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log('Pokemon saved to database: ' + id)
  }
}
