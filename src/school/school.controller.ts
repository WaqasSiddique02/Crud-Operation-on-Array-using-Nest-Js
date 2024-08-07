import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SchoolService } from './school.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('school')
@ApiTags('school')
export class SchoolController {
    constructor(private readonly schoolService: SchoolService) { }

    @Get()
    findAll(): Array<string> {
        let data = this.schoolService.findAll();
        return data;
    }

    @Get(':index')
    findOne(@Param('index') index: string): string {
        debugger;
        return this.schoolService.findOne(Number(index));
    }

    @Post(':school')
    create(@Param('school') school: string): Array<string> {
        return this.schoolService.create(school);
    }

    @Put(':index')
    @ApiBody({
        description: 'The name to add',
        type: String,
    })
    update(@Param('index') index: string, @Body('school') school: string): Array<string> {
        return this.schoolService.update(Number(index), school);
    }

    @Delete(':index')
    deleteName(@Param('index') index: string): Array<string> {
        const updatedList = this.schoolService.delete(Number(index));
        return updatedList;
    }
}