import { Controller, Get ,Post,Param,Body, Delete,Put} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Array<string> {
    return this.appService.findAll();
  }

  @Get(':index')
  findOne(@Param('index') index: string): string {
    return this.appService.findOne(Number(index));
  }

  @Post()
  @ApiBody({
    description: 'The name to add',
    type: String,
  })
  addName(@Body('name') name: string): Array<string> {
    return this.appService.addName(name);
  }

  @Delete(':index')
  deleteName(@Param('index') index: string): Array<string> {
    //console.log(`Index:${index}`);
    const updatedList = this.appService.deleteName(Number(index));
    //console.log(`Updated list: ${updatedList}`);
    return updatedList;
  }

  @Put(':index')
  @ApiBody({
    description: 'The name to add',
    type: String,
  })
  updateName(@Param('index') index: string, @Body('name') name: string):Array<string>{
    return this.appService.updateName(Number(index), name);
  }
}