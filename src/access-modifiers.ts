export { };

class Parson {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationaliry: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationaliry;
  }

  profile(): string {
    return `name: ${this.name} , age: ${this.age} `
  };
}

class Android extends Parson {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name} , nationality: ${this.nationality} `
  }
}

let nukui = new Parson('nukui', 40, 'japan');
console.log(nukui.profile());
console.log(nukui.name);
// console.log(nukui.age);
