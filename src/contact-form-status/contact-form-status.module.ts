import { Module } from '@nestjs/common';
import { ContactFormStatusService } from './contact-form-status.service';
import { ContactFormStatusResolver } from './contact-form-status.resolver';

@Module({
  providers: [ContactFormStatusResolver, ContactFormStatusService],
})
export class ContactFormStatusModule {}
