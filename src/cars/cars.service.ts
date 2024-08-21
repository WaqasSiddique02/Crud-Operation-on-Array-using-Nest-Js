import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class CarsService {
constructor(private readonly connection:Connection){};

  findAll(){
    return this.connection.query(`SELECT * FROM car`);
  }

  findOne(id: number) {
    return this.connection.query(`SELECT * FROM car WHERE id=${id}`);
  }

  async create(car: { make: string; model: string; year: number }) {
   await  this.connection.query(
      `INSERT INTO car (make, model, year) VALUES ('${car.make}', '${car.model}', ${car.year})`
    );
    return this.findAll();
  }

  update(id:number ,car: { make: string; model: string; year: number }){
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