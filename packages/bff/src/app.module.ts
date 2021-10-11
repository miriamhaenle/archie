import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodController } from './food/food.controller';
import { FoodService } from './food/food.service';

@Module({
  imports: [],
  controllers: [AppController, FoodController],
  providers: [AppService, FoodService],
})
export class AppModule {}
