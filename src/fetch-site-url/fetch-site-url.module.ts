import { Module } from '@nestjs/common';
import { FetchSiteUrlService } from './fetch-site-url.service';
import { FetchSiteUrlResolver } from './fetch-site-url.resolver';

@Module({
  providers: [FetchSiteUrlResolver, FetchSiteUrlService],
})
export class FetchSiteUrlModule {}
