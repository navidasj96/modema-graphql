import { Module } from '@nestjs/common';
import { AttributeItemsService } from './attribute-items.service';
import { AttributeItemsResolver } from './attribute-items.resolver';

@Module({
  providers: [AttributeItemsResolver, AttributeItemsService],
})
export class AttributeItemsModule {}
