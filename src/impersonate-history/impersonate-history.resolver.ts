import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImpersonateHistoryService } from './impersonate-history.service';
import { ImpersonateHistory } from './entities/impersonate-history.entity';
import { CreateImpersonateHistoryInput } from './dto/create-impersonate-history.input';
import { UpdateImpersonateHistoryInput } from './dto/update-impersonate-history.input';

@Resolver(() => ImpersonateHistory)
export class ImpersonateHistoryResolver {
  constructor(private readonly impersonateHistoryService: ImpersonateHistoryService) {}

  @Mutation(() => ImpersonateHistory)
  createImpersonateHistory(@Args('createImpersonateHistoryInput') createImpersonateHistoryInput: CreateImpersonateHistoryInput) {
    return this.impersonateHistoryService.create(createImpersonateHistoryInput);
  }

  @Query(() => [ImpersonateHistory], { name: 'impersonateHistory' })
  findAll() {
    return this.impersonateHistoryService.findAll();
  }

  @Query(() => ImpersonateHistory, { name: 'impersonateHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.impersonateHistoryService.findOne(id);
  }

  @Mutation(() => ImpersonateHistory)
  updateImpersonateHistory(@Args('updateImpersonateHistoryInput') updateImpersonateHistoryInput: UpdateImpersonateHistoryInput) {
    return this.impersonateHistoryService.update(updateImpersonateHistoryInput.id, updateImpersonateHistoryInput);
  }

  @Mutation(() => ImpersonateHistory)
  removeImpersonateHistory(@Args('id', { type: () => Int }) id: number) {
    return this.impersonateHistoryService.remove(id);
  }
}
