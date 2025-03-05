import { Module } from '@nestjs/common';
import { ChaparSettlementStatusService } from './chapar-settlement-status.service';
import { ChaparSettlementStatusResolver } from './chapar-settlement-status.resolver';

@Module({
  providers: [ChaparSettlementStatusResolver, ChaparSettlementStatusService],
})
export class ChaparSettlementStatusModule {}
