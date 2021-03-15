export { };

type Mojiretsu = string;

const fooMojiretsu: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const example: Profile = {
  name: 'yuki',
  age: 22,
};

type Profile2 = typeof example;