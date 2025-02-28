import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './entries/entries.controller';
import { PostsService } from './entries/entry.service';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
