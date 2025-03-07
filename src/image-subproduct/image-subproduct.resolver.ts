import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImageSubproductService } from './image-subproduct.service';
import { ImageSubproduct } from './entities/image-subproduct.entity';
import { CreateImageSubproductInput } from './dto/create-image-subproduct.input';
import { UpdateImageSubproductInput } from './dto/update-image-subproduct.input';

@Resolver(() => ImageSubproduct)
export class ImageSubproductResolver {
  constructor(private readonly imageSubproductService: ImageSubproductService) {}

  @Mutation(() => ImageSubproduct)
  createImageSubproduct(@Args('createImageSubproductInput') createImageSubproductInput: CreateImageSubproductInput) {
    return this.imageSubproductService.create(createImageSubproductInput);
  }

  @Query(() => [ImageSubproduct], { name: 'imageSubproduct' })
  findAll() {
    return this.imageSubproductService.findAll();
  }

  @Query(() => ImageSubproduct, { name: 'imageSubproduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageSubproductService.findOne(id);
  }

  @Mutation(() => ImageSubproduct)
  updateImageSubproduct(@Args('updateImageSubproductInput') updateImageSubproductInput: UpdateImageSubproductInput) {
    return this.imageSubproductService.update(updateImageSubproductInput.id, updateImageSubproductInput);
  }

  @Mutation(() => ImageSubproduct)
  removeImageSubproduct(@Args('id', { type: () => Int }) id: number) {
    return this.imageSubproductService.remove(id);
  }
}
