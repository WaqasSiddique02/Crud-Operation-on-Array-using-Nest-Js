import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  list: Array<string> = ['faisal','waqas','abdullah','awais'];

  findAll(): Array<string> {
    return this.list;
  }

  findOne(index: number): string {
    return this.list[Number(index)];
  }

  addName(name: string): Array<string> {
    this.list.push(name);
    return this.list;
  }

  deleteName(index: number): Array<string> {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1);
    }
    return this.list;
  }

  updateName(index:number,name:string):Array<string>{
    if(index>=0 && index<this.list.length){
      this.list[index]=name;
    }
    else{
      console.log("Invalid index");
    }

    return this.list;
  }
}