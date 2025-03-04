import { Module } from '@nestjs/common';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroupResolver } from './attribute-group.resolver';

@Module({
  providers: [AttributeGroupResolver, AttributeGroupService],
})
export class AttributeGroupModule {}
