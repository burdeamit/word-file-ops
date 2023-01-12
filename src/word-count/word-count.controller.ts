import { Controller, Get } from '@nestjs/common';
import { WordCountService } from './word-count.service';

@Controller('words')
export class WordCountController {
  constructor(private readonly wordCountService: WordCountService) {}

  @Get()
  async getFileStats(): Promise<object> {
    const response = await this.wordCountService.getFileStats();
    return response;
  }
}
