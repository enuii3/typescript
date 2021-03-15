export { };

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;

type Procfile = {
  name: string;
  age: number;
};

type PartialProcfile = Partial<Procfile>;
type PropertyTypes = keyof Procfile;

type Procfiles = {
  name: 'nukui',
  age: 44,
};

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid18InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid18InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 1960 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 1960 },
}
