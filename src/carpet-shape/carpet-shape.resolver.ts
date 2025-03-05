import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarpetShapeService } from './carpet-shape.service';
import { CarpetShape } from './entities/carpet-shape.entity';
import { CreateCarpetShapeInput } from './dto/create-carpet-shape.input';
import { UpdateCarpetShapeInput } from './dto/update-carpet-shape.input';

@Resolver(() => CarpetShape)
export class CarpetShapeResolver {
  constructor(private readonly carpetShapeService: CarpetShapeService) {}

  @Mutation(() => CarpetShape)
  createCarpetShape(@Args('createCarpetShapeInput') createCarpetShapeInput: CreateCarpetShapeInput) {
    return this.carpetShapeService.create(createCarpetShapeInput);
  }

  @Query(() => [CarpetShape], { name: 'carpetShape' })
  findAll() {
    return this.carpetShapeService.findAll();
  }

  @Query(() => CarpetShape, { name: 'carpetShape' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetShapeService.findOne(id);
  }

  @Mutation(() => CarpetShape)
  updateCarpetShape(@Args('updateCarpetShapeInput') updateCarpetShapeInput: UpdateCarpetShapeInput) {
    return this.carpetShapeService.update(updateCarpetShapeInput.id, updateCarpetShapeInput);
  }

  @Mutation(() => CarpetShape)
  removeCarpetShape(@Args('id', { type: () => Int }) id: number) {
    return this.carpetShapeService.remove(id);
  }
}
