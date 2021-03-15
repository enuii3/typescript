export { };

class Parson {
  constructor(public name: string, protected age: number) { }
}

const me = new Parson('抜井', 43);
console.log(me);

class MyNumberCard {
  private _owner: String;
  private _secretNumber: Number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('nukui', 123)
console.log(card.debugPrint());
card.secretNumber = 111111
console.log(card.debugPrint())
// console.log(card.owner)
// card._secretNumber
// card.secretNumber
// console.log(card.secretNumber)

class VisaCard {
  constructor(readonly owner: string) { }
}

let myVisaCard = new VisaCard('card-owner-nukui');
console.log(myVisaCard.owner)
// myVisaCard.owner = 'yuki'
