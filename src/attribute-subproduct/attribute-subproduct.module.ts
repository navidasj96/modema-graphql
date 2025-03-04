import { Module } from '@nestjs/common';
import { AttributeSubproductService } from './attribute-subproduct.service';
import { AttributeSubproductResolver } from './attribute-subproduct.resolver';

@Module({
  providers: [AttributeSubproductResolver, AttributeSubproductService],
})
export class AttributeSubproductModule {}
