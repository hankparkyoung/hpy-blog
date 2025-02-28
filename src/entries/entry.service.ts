import { Injectable } from '@nestjs/common';
import { Entry } from './interfaces/entry.interface';

@Injectable() // attaches metadata to the class (can be managed by Nest IoC container)
export class EntriesService {
  private readonly entries: Entry[] = [];

  create(entry: Entry) {
    this.entries.push(entry);
  }

  findAll(): Entry[] {
    return this.entries;
  }
}
