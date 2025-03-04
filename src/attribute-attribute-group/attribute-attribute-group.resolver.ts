import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributeAttributeGroupService } from './attribute-attribute-group.service';
import { AttributeAttributeGroup } from './entities/attribute-attribute-group.entity';
import { CreateAttributeAttributeGroupInput } from './dto/create-attribute-attribute-group.input';
import { UpdateAttributeAttributeGroupInput } from './dto/update-attribute-attribute-group.input';

@Resolver(() => AttributeAttributeGroup)
export class AttributeAttributeGroupResolver {
  constructor(private readonly attributeAttributeGroupService: AttributeAttributeGroupService) {}

  @Mutation(() => AttributeAttributeGroup)
  createAttributeAttributeGroup(@Args('createAttributeAttributeGroupInput') createAttributeAttributeGroupInput: CreateAttributeAttributeGroupInput) {
    return this.attributeAttributeGroupService.create(createAttributeAttributeGroupInput);
  }

  @Query(() => [AttributeAttributeGroup], { name: 'attributeAttributeGroup' })
  findAll() {
    return this.attributeAttributeGroupService.findAll();
  }

  @Query(() => AttributeAttributeGroup, { name: 'attributeAttributeGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeAttributeGroupService.findOne(id);
  }

  @Mutation(() => AttributeAttributeGroup)
  updateAttributeAttributeGroup(@Args('updateAttributeAttributeGroupInput') updateAttributeAttributeGroupInput: UpdateAttributeAttributeGroupInput) {
    return this.attributeAttributeGroupService.update(updateAttributeAttributeGroupInput.id, updateAttributeAttributeGroupInput);
  }

  @Mutation(() => AttributeAttributeGroup)
  removeAttributeAttributeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.attributeAttributeGroupService.remove(id);
  }
}
