import { Column } from 'typeorm';

export class PersonCreate {
  @Column()
  firstName: string;
}
