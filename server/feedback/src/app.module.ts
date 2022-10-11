import { Module } from '@nestjs/common';
import { AppController } from './feedbacks/feedback.controller';
import { FeedbackService } from './feedbacks/feedback.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [FeedbackService],
})
export class AppModule {}
