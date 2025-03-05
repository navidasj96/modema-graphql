import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DesignService } from './design.service';
import { Design } from './entities/design.entity';
import { CreateDesignInput } from './dto/create-design.input';
import { UpdateDesignInput } from './dto/update-design.input';

@Resolver(() => Design)
export class DesignResolver {
  constructor(private readonly designService: DesignService) {}

  @Mutation(() => Design)
  createDesign(@Args('createDesignInput') createDesignInput: CreateDesignInput) {
    return this.designService.create(createDesignInput);
  }

  @Query(() => [Design], { name: 'design' })
  findAll() {
    return this.designService.findAll();
  }

  @Query(() => Design, { name: 'design' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.designService.findOne(id);
  }

  @Mutation(() => Design)
  updateDesign(@Args('updateDesignInput') updateDesignInput: UpdateDesignInput) {
    return this.designService.update(updateDesignInput.id, updateDesignInput);
  }

  @Mutation(() => Design)
  removeDesign(@Args('id', { type: () => Int }) id: number) {
    return this.designService.remove(id);
  }
}
