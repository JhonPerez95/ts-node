import powers, { Power } from '../data/power'

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power() {
    console.log(this.powerId)
    return (
      powers.find((item: Power) => item.id === this.powerId)?.desc ??
      'Not found'
    )
  }
}
