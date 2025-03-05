import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DamageReasonService } from './damage-reason.service';
import { DamageReason } from './entities/damage-reason.entity';
import { CreateDamageReasonInput } from './dto/create-damage-reason.input';
import { UpdateDamageReasonInput } from './dto/update-damage-reason.input';

@Resolver(() => DamageReason)
export class DamageReasonResolver {
  constructor(private readonly damageReasonService: DamageReasonService) {}

  @Mutation(() => DamageReason)
  createDamageReason(@Args('createDamageReasonInput') createDamageReasonInput: CreateDamageReasonInput) {
    return this.damageReasonService.create(createDamageReasonInput);
  }

  @Query(() => [DamageReason], { name: 'damageReason' })
  findAll() {
    return this.damageReasonService.findAll();
  }

  @Query(() => DamageReason, { name: 'damageReason' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.damageReasonService.findOne(id);
  }

  @Mutation(() => DamageReason)
  updateDamageReason(@Args('updateDamageReasonInput') updateDamageReasonInput: UpdateDamageReasonInput) {
    return this.damageReasonService.update(updateDamageReasonInput.id, updateDamageReasonInput);
  }

  @Mutation(() => DamageReason)
  removeDamageReason(@Args('id', { type: () => Int }) id: number) {
    return this.damageReasonService.remove(id);
  }
}
