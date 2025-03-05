import { Module } from '@nestjs/common';
import { HelpDeskService } from './help-desk.service';
import { HelpDeskResolver } from './help-desk.resolver';

@Module({
  providers: [HelpDeskResolver, HelpDeskService],
})
export class HelpDeskModule {}
