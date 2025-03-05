import { Module } from '@nestjs/common';
import { ContactFormHistoryService } from './contact-form-history.service';
import { ContactFormHistoryResolver } from './contact-form-history.resolver';

@Module({
  providers: [ContactFormHistoryResolver, ContactFormHistoryService],
})
export class ContactFormHistoryModule {}
