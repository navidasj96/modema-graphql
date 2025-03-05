import { Module } from '@nestjs/common';
import { ContactFormService } from './contact-form.service';
import { ContactFormResolver } from './contact-form.resolver';

@Module({
  providers: [ContactFormResolver, ContactFormService],
})
export class ContactFormModule {}
