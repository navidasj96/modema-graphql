import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImageSizeService } from './image-size.service';
import { ImageSize } from './entities/image-size.entity';
import { CreateImageSizeInput } from './dto/create-image-size.input';
import { UpdateImageSizeInput } from './dto/update-image-size.input';

@Resolver(() => ImageSize)
export class ImageSizeResolver {
  constructor(private readonly imageSizeService: ImageSizeService) {}

  @Mutation(() => ImageSize)
  createImageSize(@Args('createImageSizeInput') createImageSizeInput: CreateImageSizeInput) {
    return this.imageSizeService.create(createImageSizeInput);
  }

  @Query(() => [ImageSize], { name: 'imageSize' })
  findAll() {
    return this.imageSizeService.findAll();
  }

  @Query(() => ImageSize, { name: 'imageSize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageSizeService.findOne(id);
  }

  @Mutation(() => ImageSize)
  updateImageSize(@Args('updateImageSizeInput') updateImageSizeInput: UpdateImageSizeInput) {
    return this.imageSizeService.update(updateImageSizeInput.id, updateImageSizeInput);
  }

  @Mutation(() => ImageSize)
  removeImageSize(@Args('id', { type: () => Int }) id: number) {
    return this.imageSizeService.remove(id);
  }
}
