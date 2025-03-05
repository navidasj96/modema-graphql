import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CouponSubjectService } from './coupon-subject.service';
import { CouponSubject } from './entities/coupon-subject.entity';
import { CreateCouponSubjectInput } from './dto/create-coupon-subject.input';
import { UpdateCouponSubjectInput } from './dto/update-coupon-subject.input';

@Resolver(() => CouponSubject)
export class CouponSubjectResolver {
  constructor(private readonly couponSubjectService: CouponSubjectService) {}

  @Mutation(() => CouponSubject)
  createCouponSubject(@Args('createCouponSubjectInput') createCouponSubjectInput: CreateCouponSubjectInput) {
    return this.couponSubjectService.create(createCouponSubjectInput);
  }

  @Query(() => [CouponSubject], { name: 'couponSubject' })
  findAll() {
    return this.couponSubjectService.findAll();
  }

  @Query(() => CouponSubject, { name: 'couponSubject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.couponSubjectService.findOne(id);
  }

  @Mutation(() => CouponSubject)
  updateCouponSubject(@Args('updateCouponSubjectInput') updateCouponSubjectInput: UpdateCouponSubjectInput) {
    return this.couponSubjectService.update(updateCouponSubjectInput.id, updateCouponSubjectInput);
  }

  @Mutation(() => CouponSubject)
  removeCouponSubject(@Args('id', { type: () => Int }) id: number) {
    return this.couponSubjectService.remove(id);
  }
}
