import { Injectable } from '@nestjs/common';
import { Food } from './food.interface';

@Injectable()
export class FoodService {
  private readonly foods: Food[] = [];

  create(food: Food) {
    this.foods.push(food);
  }
  findAll(): Food[] {
    return this.foods;
  }
}
