import { Length } from 'class-validator';

export class CreateEventDto {
  @Length(5, 100, { groups: ['update'] })
  name: string;
  description: string;
  when: string;
  @Length(5, 100, { groups: ['create'] })
  address: string;
}
