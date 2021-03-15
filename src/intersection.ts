export { };

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimaginSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const OchiaiHiromitsu: TwoWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.367
}
