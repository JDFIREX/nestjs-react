import { Injectable, PipeTransform } from '@nestjs/common';
import { Person } from '../dao/Person.dao';
import { NotValidException } from '../exceptions/NotValidException';

@Injectable()
export class PostValidationPipe implements PipeTransform<Person> {
  transform(value: Person) {
    const nameRegex = new RegExp('^[A-Z]');
    if (!nameRegex.test(value.firstName)) throw new NotValidException();
    return value;
  }
}
