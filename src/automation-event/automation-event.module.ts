import { Module } from '@nestjs/common';
import { AutomationEventService } from './automation-event.service';
import { AutomationEventResolver } from './automation-event.resolver';

@Module({
  providers: [AutomationEventResolver, AutomationEventService],
})
export class AutomationEventModule {}
