import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImageLayerService } from './image-layer.service';
import { ImageLayer } from './entities/image-layer.entity';
import { CreateImageLayerInput } from './dto/create-image-layer.input';
import { UpdateImageLayerInput } from './dto/update-image-layer.input';

@Resolver(() => ImageLayer)
export class ImageLayerResolver {
  constructor(private readonly imageLayerService: ImageLayerService) {}

  @Mutation(() => ImageLayer)
  createImageLayer(@Args('createImageLayerInput') createImageLayerInput: CreateImageLayerInput) {
    return this.imageLayerService.create(createImageLayerInput);
  }

  @Query(() => [ImageLayer], { name: 'imageLayer' })
  findAll() {
    return this.imageLayerService.findAll();
  }

  @Query(() => ImageLayer, { name: 'imageLayer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageLayerService.findOne(id);
  }

  @Mutation(() => ImageLayer)
  updateImageLayer(@Args('updateImageLayerInput') updateImageLayerInput: UpdateImageLayerInput) {
    return this.imageLayerService.update(updateImageLayerInput.id, updateImageLayerInput);
  }

  @Mutation(() => ImageLayer)
  removeImageLayer(@Args('id', { type: () => Int }) id: number) {
    return this.imageLayerService.remove(id);
  }
}
