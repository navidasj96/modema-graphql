import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroup } from './entities/attribute-group.entity';
import { CreateAttributeGroupInput } from './dto/create-attribute-group.input';
import { UpdateAttributeGroupInput } from './dto/update-attribute-group.input';

@Resolver(() => AttributeGroup)
export class AttributeGroupResolver {
  constructor(private readonly attributeGroupService: AttributeGroupService) {}

  @Mutation(() => AttributeGroup)
  createAttributeGroup(@Args('createAttributeGroupInput') createAttributeGroupInput: CreateAttributeGroupInput) {
    return this.attributeGroupService.create(createAttributeGroupInput);
  }

  @Query(() => [AttributeGroup], { name: 'attributeGroup' })
  findAll() {
    return this.attributeGroupService.findAll();
  }

  @Query(() => AttributeGroup, { name: 'attributeGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeGroupService.findOne(id);
  }

  @Mutation(() => AttributeGroup)
  updateAttributeGroup(@Args('updateAttributeGroupInput') updateAttributeGroupInput: UpdateAttributeGroupInput) {
    return this.attributeGroupService.update(updateAttributeGroupInput.id, updateAttributeGroupInput);
  }

  @Mutation(() => AttributeGroup)
  removeAttributeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.attributeGroupService.remove(id);
  }
}
