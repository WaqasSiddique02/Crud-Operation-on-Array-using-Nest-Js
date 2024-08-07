import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
