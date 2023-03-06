import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { PostValidationPipe } from './validation/PostValidation.pipe';
import { Person } from './dao/Person.dao';
import { PersonCreate } from './dto/PersonCreate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UsePipes(PostValidationPipe)
  create(@Body() personCreate: PersonCreate): Promise<Person> {
    return this.appService.create(personCreate);
  }
}
