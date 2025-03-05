import { Module } from '@nestjs/common';
import { BorderService } from './border.service';
import { BorderResolver } from './border.resolver';

@Module({
  providers: [BorderResolver, BorderService],
})
export class BorderModule {}
