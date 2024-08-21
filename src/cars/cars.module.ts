import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/car.entity';
import { CarsController } from './cars.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
  controllers: [CarsController]
})

export class CarsModule {}