import { Module } from '@nestjs/common';
import { AttributeAttributeGroupService } from './attribute-attribute-group.service';
import { AttributeAttributeGroupResolver } from './attribute-attribute-group.resolver';

@Module({
  providers: [AttributeAttributeGroupResolver, AttributeAttributeGroupService],
})
export class AttributeAttributeGroupModule {}
