import { Injectable } from '@nestjs/common';
import { CreateAttributeGroupInput } from './dto/create-attribute-group.input';
import { UpdateAttributeGroupInput } from './dto/update-attribute-group.input';

@Injectable()
export class AttributeGroupService {
  create(createAttributeGroupInput: CreateAttributeGroupInput) {
    return 'This action adds a new attributeGroup';
  }

  findAll() {
    return `This action returns all attributeGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeGroup`;
  }

  update(id: number, updateAttributeGroupInput: UpdateAttributeGroupInput) {
    return `This action updates a #${id} attributeGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeGroup`;
  }
}
