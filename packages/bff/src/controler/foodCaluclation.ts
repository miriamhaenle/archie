import { Request, Response } from 'express';
import dogs from '../exampleDogs.json';
import { food, caloryNeedPerAge } from '../lib/caloryTable';

export type Dog = {
  id: string;
  name: string;
  age: number;
  dailyCaloryIntake: number[];
};

export type DogList = Dog[];

export type Food = {
  id: string;
  name: string;
  amount: number;
  unit: string;
};

const isInAgeRange = (value: number | undefined) => {
  if (value) {
    return value >= 2 && value < 15;
  }
};

const caluclateCaloryPerIntake = (foodName: string, intake: number) =>
  food[foodName].calories * intake;

const calculateAverageCaloryNeed = (minMax: { min: number; max: number }) => {
  const arrayFromProp = [minMax.min, minMax.max];
  return arrayFromProp.reduce(
    (acc, cur, _, total) => (acc + cur) / total.length
  );
};

export const postFood = (req: Request, res: Response) => {
  const newIntake: Food = {
    id: req.body.id,
    name: req.body.name,
    amount: req.body.amount,
    unit: req.body.unit,
  };

  dogs.map((dog: Dog) => {
    if (dog.id === newIntake.id) {
      const updatedIntake = caluclateCaloryPerIntake(
        newIntake.name,
        newIntake.amount
      );

      dog.dailyCaloryIntake.push(updatedIntake);
    }
  });
};

export const dailyCaloryNeed = (req: Request, res: Response) => {
  const dogId = req.params.id;
  const dogAge = dogs.find((dog) => dog.id == dogId)?.age;

  try {
    if (dogAge) {
      const averageCaloryNeed =
        dogAge && calculateAverageCaloryNeed(caloryNeedPerAge[dogAge]);
      res.status(200).json(averageCaloryNeed);
    } else {
      throw new Error('Something went wrong. Please try again');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Something went wrong. Please try again.');
  }
};