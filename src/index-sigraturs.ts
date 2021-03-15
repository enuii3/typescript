export { };

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'nukui', underTwenty: false };

profile.name = 'nukui';
profile.age = 43;
profile.narionality = 'Japan';
