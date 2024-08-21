import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get()
    findAll(){
      return this.carsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id: number) {
      return this.carsService.findOne(id);
    }
  
    @Post()
    @ApiBody({
      description: 'The info to add',
      type: String,
    })
    create(@Body() car: { make: string; model: string; year: number }) {
      return this.carsService.create(car);
    }

    @Put(":id")
    @ApiBody({
      description: 'The info to add',
      type: String,
    })
    update(@Param('id',ParseIntPipe) id: number,@Body() car: { make: string; model: string; year: number }){
      return this.carsService.update(id,car);
    }
  
    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id: number){
      return this.carsService.delete(id);
    }
}