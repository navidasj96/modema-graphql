import { Module } from '@nestjs/common';
import { ExitControlService } from './exit-control.service';
import { ExitControlResolver } from './exit-control.resolver';

@Module({
  providers: [ExitControlResolver, ExitControlService],
})
export class ExitControlModule {}
