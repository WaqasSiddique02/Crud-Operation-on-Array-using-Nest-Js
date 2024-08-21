import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CarDto {
  id: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  year: number;
}