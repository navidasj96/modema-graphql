import { Module } from '@nestjs/common';
import { InstagramFeedService } from './instagram-feed.service';
import { InstagramFeedResolver } from './instagram-feed.resolver';

@Module({
  providers: [InstagramFeedResolver, InstagramFeedService],
})
export class InstagramFeedModule {}
