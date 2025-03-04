import { Injectable } from '@nestjs/common';
import { CreateAttributeAttributeGroupInput } from './dto/create-attribute-attribute-group.input';
import { UpdateAttributeAttributeGroupInput } from './dto/update-attribute-attribute-group.input';

@Injectable()
export class AttributeAttributeGroupService {
  create(createAttributeAttributeGroupInput: CreateAttributeAttributeGroupInput) {
    return 'This action adds a new attributeAttributeGroup';
  }

  findAll() {
    return `This action returns all attributeAttributeGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeAttributeGroup`;
  }

  update(id: number, updateAttributeAttributeGroupInput: UpdateAttributeAttributeGroupInput) {
    return `This action updates a #${id} attributeAttributeGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeAttributeGroup`;
  }
}
