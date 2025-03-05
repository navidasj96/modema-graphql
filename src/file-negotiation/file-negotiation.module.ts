import { Module } from '@nestjs/common';
import { FileNegotiationService } from './file-negotiation.service';
import { FileNegotiationResolver } from './file-negotiation.resolver';

@Module({
  providers: [FileNegotiationResolver, FileNegotiationService],
})
export class FileNegotiationModule {}
