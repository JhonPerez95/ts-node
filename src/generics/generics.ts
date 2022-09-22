export const printObj = (arg: any) => {
  console.log(arg)
}

export function genericFuctin<T>(arg: T): T {
  return arg
}

export const genericFuctinArrow = <T>(arg: T): T => {
  return arg
}
