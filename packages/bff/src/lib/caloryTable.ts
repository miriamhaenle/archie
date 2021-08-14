export type FoodCategory = Record<string, FoodItem>;

export type FoodItem = {
  name: string;
  calories: number;
  unit: 'gram' | 'piece';
};

export const food: FoodCategory = {
  joseraYoungStar: {
    name: 'Josera Young Star',
    calories: 3.725,
    unit: 'gram',
  },
  lambBelly: {
    name: 'Dried lamb belly',
    calories: 0.98,
    unit: 'gram',
  },
  cheese: {
    name: 'Cheese',
    calories: 2.1,
    unit: 'gram',
  },
  cottageCheese: {
    name: 'Cottage Cheese',
    calories: 0.98,
    unit: 'gram',
  },
  joseraLoopies: {
    name: 'Josera Loopies',
    calories: 8.6,
    unit: 'piece',
  },
};

export const caloryNeedPerAge: Record<number, { min: number; max: number }> = {
  1.5: {
    min: 260.75,
    max: 670.5,
  },
  2: {
    min: 689,
    max: 838,
  },
  3: {
    min: 1061,
    max: 1285,
  },
  4: {
    min: 1360,
    max: 1750,
  },
  5: {
    min: 1310,
    max: 1750.75,
  },
  7: {
    min: 1453,
    max: 1639,
  },
};
