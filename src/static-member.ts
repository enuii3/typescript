export { };

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'yuki';
  static lastName: string = 'nukui';

  static work() {
    return `hey, guys This is ${this.firstName}`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) { }
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) { }
    }
  }
}

namespace English {
  export class Person {
    constructor(public firstName: string, public middleName: string, public lastName: string) { }
  }
}

const tokyo = new Japanese.Tokyo.Person('nukui');
const osaka = new Japanese.Osaka.Person('nukui');
console.log(tokyo)
console.log(osaka)
console.log(`tokyo ${tokyo}`)
console.log(`osaka ${osaka}`)

const michael = new English.Person('Michael', 'Joseph', 'Jakson');
console.log(michael)