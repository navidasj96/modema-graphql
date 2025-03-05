import { Module } from '@nestjs/common';
import { ChaparTrackingHistoryService } from './chapar-tracking-history.service';
import { ChaparTrackingHistoryResolver } from './chapar-tracking-history.resolver';

@Module({
  providers: [ChaparTrackingHistoryResolver, ChaparTrackingHistoryService],
})
export class ChaparTrackingHistoryModule {}
