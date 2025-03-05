import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BasicCarpetDesignerService } from './basic-carpet-designer.service';
import { BasicCarpetDesigner } from './entities/basic-carpet-designer.entity';
import { CreateBasicCarpetDesignerInput } from './dto/create-basic-carpet-designer.input';
import { UpdateBasicCarpetDesignerInput } from './dto/update-basic-carpet-designer.input';

@Resolver(() => BasicCarpetDesigner)
export class BasicCarpetDesignerResolver {
  constructor(private readonly basicCarpetDesignerService: BasicCarpetDesignerService) {}

  @Mutation(() => BasicCarpetDesigner)
  createBasicCarpetDesigner(@Args('createBasicCarpetDesignerInput') createBasicCarpetDesignerInput: CreateBasicCarpetDesignerInput) {
    return this.basicCarpetDesignerService.create(createBasicCarpetDesignerInput);
  }

  @Query(() => [BasicCarpetDesigner], { name: 'basicCarpetDesigner' })
  findAll() {
    return this.basicCarpetDesignerService.findAll();
  }

  @Query(() => BasicCarpetDesigner, { name: 'basicCarpetDesigner' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetDesignerService.findOne(id);
  }

  @Mutation(() => BasicCarpetDesigner)
  updateBasicCarpetDesigner(@Args('updateBasicCarpetDesignerInput') updateBasicCarpetDesignerInput: UpdateBasicCarpetDesignerInput) {
    return this.basicCarpetDesignerService.update(updateBasicCarpetDesignerInput.id, updateBasicCarpetDesignerInput);
  }

  @Mutation(() => BasicCarpetDesigner)
  removeBasicCarpetDesigner(@Args('id', { type: () => Int }) id: number) {
    return this.basicCarpetDesignerService.remove(id);
  }
}
