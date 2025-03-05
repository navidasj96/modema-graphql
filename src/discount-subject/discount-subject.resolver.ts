import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DiscountSubjectService } from './discount-subject.service';
import { DiscountSubject } from './entities/discount-subject.entity';
import { CreateDiscountSubjectInput } from './dto/create-discount-subject.input';
import { UpdateDiscountSubjectInput } from './dto/update-discount-subject.input';

@Resolver(() => DiscountSubject)
export class DiscountSubjectResolver {
  constructor(private readonly discountSubjectService: DiscountSubjectService) {}

  @Mutation(() => DiscountSubject)
  createDiscountSubject(@Args('createDiscountSubjectInput') createDiscountSubjectInput: CreateDiscountSubjectInput) {
    return this.discountSubjectService.create(createDiscountSubjectInput);
  }

  @Query(() => [DiscountSubject], { name: 'discountSubject' })
  findAll() {
    return this.discountSubjectService.findAll();
  }

  @Query(() => DiscountSubject, { name: 'discountSubject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.discountSubjectService.findOne(id);
  }

  @Mutation(() => DiscountSubject)
  updateDiscountSubject(@Args('updateDiscountSubjectInput') updateDiscountSubjectInput: UpdateDiscountSubjectInput) {
    return this.discountSubjectService.update(updateDiscountSubjectInput.id, updateDiscountSubjectInput);
  }

  @Mutation(() => DiscountSubject)
  removeDiscountSubject(@Args('id', { type: () => Int }) id: number) {
    return this.discountSubjectService.remove(id);
  }
}
