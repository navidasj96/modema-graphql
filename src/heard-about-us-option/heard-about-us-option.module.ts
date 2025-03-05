import { Module } from '@nestjs/common';
import { HeardAboutUsOptionService } from './heard-about-us-option.service';
import { HeardAboutUsOptionResolver } from './heard-about-us-option.resolver';

@Module({
  providers: [HeardAboutUsOptionResolver, HeardAboutUsOptionService],
})
export class HeardAboutUsOptionModule {}
