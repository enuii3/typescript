export { };

let name: any = 'nukui';

let length = (<string>name).length;
// length = 'foo';

let firstName = 'nukui';
name = 'yuki'
let nickname = 'yuki' as const;

let profile = {
  name: 'nukui',
  height: 67
} as const;

// profile.name = 'nukui';
// profile.height = 67;

let program: { name: string; age: number | null } = {
  name: 'nukui',
  age: null
};
