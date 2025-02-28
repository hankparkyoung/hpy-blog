import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { EntriesService } from './entry.service';
import { Entry } from './interfaces/entry.interface';

@Controller('entries')
export class EntriesController {
  constructor(private entriesService: EntriesService) {}

  @Post()
  async create(@Body() createEntryDto: CreateEntryDto) {
    this.entriesService.create(createEntryDto);
    return 'This action adds a new entry';
  }
  @Get()
  async findAll(): Promise<Entry[]> {
    return this.entriesService.findAll();
  }
  /* Additional routes could be added in @Get()
      ie: @Get('latest')
      would result in the route of GET /entries/latest
      also supports wildcards (*)
  */
  @Get(':date')
  findOne(@Param('date') date: string): string {
    // expect date to be in YYYY-MM-DD format
    const entryDate: Date = new Date(date + 'T00:00');

    return `This action returns the entry with the date: ${date}`;
  }
}
 