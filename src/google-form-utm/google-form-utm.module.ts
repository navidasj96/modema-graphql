import { Module } from '@nestjs/common';
import { GoogleFormUtmService } from './google-form-utm.service';
import { GoogleFormUtmResolver } from './google-form-utm.resolver';

@Module({
  providers: [GoogleFormUtmResolver, GoogleFormUtmService],
})
export class GoogleFormUtmModule {}
