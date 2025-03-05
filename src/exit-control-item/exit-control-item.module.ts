import { Module } from '@nestjs/common';
import { ExitControlItemService } from './exit-control-item.service';
import { ExitControlItemResolver } from './exit-control-item.resolver';

@Module({
  providers: [ExitControlItemResolver, ExitControlItemService],
})
export class ExitControlItemModule {}
