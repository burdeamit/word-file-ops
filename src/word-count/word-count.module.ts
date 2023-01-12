import { Module } from '@nestjs/common';
import { WordCountController } from './word-count.controller';
import { WordCountService } from './word-count.service';

@Module({
  controllers: [WordCountController],
  providers: [WordCountService],
})
export class WordCountModule {}
