import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstagramFeedService } from './instagram-feed.service';
import { InstagramFeed } from './entities/instagram-feed.entity';
import { CreateInstagramFeedInput } from './dto/create-instagram-feed.input';
import { UpdateInstagramFeedInput } from './dto/update-instagram-feed.input';

@Resolver(() => InstagramFeed)
export class InstagramFeedResolver {
  constructor(private readonly instagramFeedService: InstagramFeedService) {}

  @Mutation(() => InstagramFeed)
  createInstagramFeed(@Args('createInstagramFeedInput') createInstagramFeedInput: CreateInstagramFeedInput) {
    return this.instagramFeedService.create(createInstagramFeedInput);
  }

  @Query(() => [InstagramFeed], { name: 'instagramFeed' })
  findAll() {
    return this.instagramFeedService.findAll();
  }

  @Query(() => InstagramFeed, { name: 'instagramFeed' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.instagramFeedService.findOne(id);
  }

  @Mutation(() => InstagramFeed)
  updateInstagramFeed(@Args('updateInstagramFeedInput') updateInstagramFeedInput: UpdateInstagramFeedInput) {
    return this.instagramFeedService.update(updateInstagramFeedInput.id, updateInstagramFeedInput);
  }

  @Mutation(() => InstagramFeed)
  removeInstagramFeed(@Args('id', { type: () => Int }) id: number) {
    return this.instagramFeedService.remove(id);
  }
}
