import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
export class UpdateEventDto extends PartialType(CreateEventDto) {}

//-------Optional fields in DTOs-------
// export class UpdateEventDto {
//   name?: string;
//   description?: string;
//   when?: string;
//   address?: string;
// }
