import { Injectable } from '@nestjs/common';
import { debug } from 'console';

@Injectable()
export class SchoolService {
    list : Array<string> =['askari','beacon','fazaia','fg'];
    
  findAll(): Array<string>{
    return this.list;
  }

  findOne(index: number): string {
    return this.list[Number(index)];
  }

  create(school:string) : Array<string>{
    this.list.push(school);
    return this.list;
  }

  update(index:number,name:string):Array<string>{
    if(index>=0 && index<this.list.length){
      this.list[index]=name;
    }
    else{
      console.log("Invalid index");
    }

    return this.list;
  }

  delete(index: number): Array<string> {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1);
    }
    return this.list;
  }
}
