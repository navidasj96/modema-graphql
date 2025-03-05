import { Module } from '@nestjs/common';
import { City2Service } from './city2.service';
import { City2Resolver } from './city2.resolver';

@Module({
  providers: [City2Resolver, City2Service],
})
export class City2Module {}
