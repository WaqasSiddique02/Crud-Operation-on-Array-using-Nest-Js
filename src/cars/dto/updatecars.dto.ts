import { PartialType } from "@nestjs/mapped-types";
import { CarDto } from "./cars.dto";

export class UpdateCarDto extends PartialType(CarDto){}