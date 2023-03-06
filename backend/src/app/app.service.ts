import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './dao/Person.dao';
import { Repository } from 'typeorm';
import { PersonCreate } from './dto/PersonCreate.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Person)
    private usersRepository: Repository<Person>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  create(personCreate: PersonCreate): Promise<Person> {
    return this.usersRepository.save(personCreate);
  }
}
