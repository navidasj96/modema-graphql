import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GhazalService } from './ghazal.service';
import { Ghazal } from './entities/ghazal.entity';
import { CreateGhazalInput } from './dto/create-ghazal.input';
import { UpdateGhazalInput } from './dto/update-ghazal.input';

@Resolver(() => Ghazal)
export class GhazalResolver {
  constructor(private readonly ghazalService: GhazalService) {}

  @Mutation(() => Ghazal)
  createGhazal(@Args('createGhazalInput') createGhazalInput: CreateGhazalInput) {
    return this.ghazalService.create(createGhazalInput);
  }

  @Query(() => [Ghazal], { name: 'ghazal' })
  findAll() {
    return this.ghazalService.findAll();
  }

  @Query(() => Ghazal, { name: 'ghazal' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ghazalService.findOne(id);
  }

  @Mutation(() => Ghazal)
  updateGhazal(@Args('updateGhazalInput') updateGhazalInput: UpdateGhazalInput) {
    return this.ghazalService.update(updateGhazalInput.id, updateGhazalInput);
  }

  @Mutation(() => Ghazal)
  removeGhazal(@Args('id', { type: () => Int }) id: number) {
    return this.ghazalService.remove(id);
  }
}
