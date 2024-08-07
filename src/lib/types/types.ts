type B = {
  name: string;
  age: number;
  rating: string | null;
  cars?: Car;
};

type Car = {
  model: string;
  year: number;
};

interface ICar {
  model: string;
  year: number;
}

let qqq: B = {
  name: 'dsjjs',
  age: 20,
  rating: null,
};

let array: ICar[] = [{ model: 'x5', year: 2000 }];

type Arg = ArgsEnum.ON | ArgsEnum.OFF;

enum ArgsEnum {
  ON = 'on',
  OFF = 'off',
}
