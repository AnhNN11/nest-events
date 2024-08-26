import { Repository } from 'typeorm';

export class EventsService {
  constructor(private readonly eventRepository: Repository<Event>) {}
}
