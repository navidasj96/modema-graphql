import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImagesSizeGuidesDetailService } from './images-size-guides-detail.service';
import { ImagesSizeGuidesDetail } from './entities/images-size-guides-detail.entity';
import { CreateImagesSizeGuidesDetailInput } from './dto/create-images-size-guides-detail.input';
import { UpdateImagesSizeGuidesDetailInput } from './dto/update-images-size-guides-detail.input';

@Resolver(() => ImagesSizeGuidesDetail)
export class ImagesSizeGuidesDetailResolver {
  constructor(private readonly imagesSizeGuidesDetailService: ImagesSizeGuidesDetailService) {}

  @Mutation(() => ImagesSizeGuidesDetail)
  createImagesSizeGuidesDetail(@Args('createImagesSizeGuidesDetailInput') createImagesSizeGuidesDetailInput: CreateImagesSizeGuidesDetailInput) {
    return this.imagesSizeGuidesDetailService.create(createImagesSizeGuidesDetailInput);
  }

  @Query(() => [ImagesSizeGuidesDetail], { name: 'imagesSizeGuidesDetail' })
  findAll() {
    return this.imagesSizeGuidesDetailService.findAll();
  }

  @Query(() => ImagesSizeGuidesDetail, { name: 'imagesSizeGuidesDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imagesSizeGuidesDetailService.findOne(id);
  }

  @Mutation(() => ImagesSizeGuidesDetail)
  updateImagesSizeGuidesDetail(@Args('updateImagesSizeGuidesDetailInput') updateImagesSizeGuidesDetailInput: UpdateImagesSizeGuidesDetailInput) {
    return this.imagesSizeGuidesDetailService.update(updateImagesSizeGuidesDetailInput.id, updateImagesSizeGuidesDetailInput);
  }

  @Mutation(() => ImagesSizeGuidesDetail)
  removeImagesSizeGuidesDetail(@Args('id', { type: () => Int }) id: number) {
    return this.imagesSizeGuidesDetailService.remove(id);
  }
}
