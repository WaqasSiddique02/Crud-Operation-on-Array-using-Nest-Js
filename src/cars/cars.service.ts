import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CarDto } from './dto/cars.dto';
import { UpdateCarDto } from './dto/updatecars.dto';

@Injectable()
export class CarsService {
constructor(private readonly connection:Connection){};

  findAll(){
    return this.connection.query(`SELECT * FROM car`);
  }

  async findOne(id: number) {
    const [record] = await this.connection.query(`SELECT * FROM car WHERE id=${id}`);
  
    if (!record) {
      throw new NotFoundException("Record not found");
    }
  
    return record;
  }

  async create(car: CarDto) {
   await  this.connection.query(
      `INSERT INTO car (make, model, year) VALUES ('${car.make}', '${car.model}', ${car.year})`
    );
    return this.findAll();
  }

  update(id:number ,car: UpdateCarDto){
    this.connection.query(
      `UPDATE car SET make='${car.make}', model='${car.model}', year=${car.year} WHERE id=${id}`
    );
    return "Updated";
  }

  delete(id:number){
    this.connection.query(`DELETE FROM car WHERE id=${id}`);
    return "Deleted";
  }
}