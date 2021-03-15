export { };

class Parson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name} , age: ${this.age} `
  };
}

let nukui = new Parson('nukui', 40);
console.log(nukui.profile());
