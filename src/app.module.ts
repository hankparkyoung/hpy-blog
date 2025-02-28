import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntriesController } from './entries/entries.controller';
import { EntriesService } from './entries/entry.service';

@Module({
  imports: [],
  controllers: [AppController, EntriesController],
  providers: [AppService, EntriesService],
})
export class AppModule {}
