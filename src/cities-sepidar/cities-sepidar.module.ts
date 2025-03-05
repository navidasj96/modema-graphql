import { Module } from '@nestjs/common';
import { CitiesSepidarService } from './cities-sepidar.service';
import { CitiesSepidarResolver } from './cities-sepidar.resolver';

@Module({
  providers: [CitiesSepidarResolver, CitiesSepidarService],
})
export class CitiesSepidarModule {}
