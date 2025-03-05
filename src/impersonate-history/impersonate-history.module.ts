import { Module } from '@nestjs/common';
import { ImpersonateHistoryService } from './impersonate-history.service';
import { ImpersonateHistoryResolver } from './impersonate-history.resolver';

@Module({
  providers: [ImpersonateHistoryResolver, ImpersonateHistoryService],
})
export class ImpersonateHistoryModule {}
