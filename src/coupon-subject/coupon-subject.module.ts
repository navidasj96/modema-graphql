import { Module } from '@nestjs/common';
import { CouponSubjectService } from './coupon-subject.service';
import { CouponSubjectResolver } from './coupon-subject.resolver';

@Module({
  providers: [CouponSubjectResolver, CouponSubjectService],
})
export class CouponSubjectModule {}
