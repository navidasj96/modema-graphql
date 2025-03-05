import { Module } from '@nestjs/common';
import { DiscountSubjectService } from './discount-subject.service';
import { DiscountSubjectResolver } from './discount-subject.resolver';

@Module({
  providers: [DiscountSubjectResolver, DiscountSubjectService],
})
export class DiscountSubjectModule {}
