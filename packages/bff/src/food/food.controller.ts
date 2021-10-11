import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateFoodIntakeDto } from 'src/dto/create-food-intake.dto';
import { Food } from './food.interface';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  findAll(): Food[] {
    return this.foodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns #${id} food`;
  }
  @Post()
  add(@Body() createFoodIntake: CreateFoodIntakeDto) {
    return this.foodService.create(createFoodIntake);
  }
}
