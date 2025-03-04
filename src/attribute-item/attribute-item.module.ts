import { Module } from '@nestjs/common';
import { AttributeItemService } from './attribute-item.service';
import { AttributeItemResolver } from './attribute-item.resolver';

@Module({
  providers: [AttributeItemResolver, AttributeItemService],
})
export class AttributeItemModule {}
