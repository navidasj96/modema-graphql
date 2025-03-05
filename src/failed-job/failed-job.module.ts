import { Module } from '@nestjs/common';
import { FailedJobService } from './failed-job.service';
import { FailedJobResolver } from './failed-job.resolver';

@Module({
  providers: [FailedJobResolver, FailedJobService],
})
export class FailedJobModule {}
