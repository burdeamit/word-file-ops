import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordCountModule } from './word-count/word-count.module';

@Module({
  imports: [WordCountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
