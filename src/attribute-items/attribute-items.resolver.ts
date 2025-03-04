import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributeItemsService } from './attribute-items.service';
import { AttributeItem } from './entities/attribute-item.entity';
import { CreateAttributeItemInput } from './dto/create-attribute-item.input';
import { UpdateAttributeItemInput } from './dto/update-attribute-item.input';

@Resolver(() => AttributeItem)
export class AttributeItemsResolver {
  constructor(private readonly attributeItemsService: AttributeItemsService) {}

  @Mutation(() => AttributeItem)
  createAttributeItem(@Args('createAttributeItemInput') createAttributeItemInput: CreateAttributeItemInput) {
    return this.attributeItemsService.create(createAttributeItemInput);
  }

  @Query(() => [AttributeItem], { name: 'attributeItems' })
  findAll() {
    return this.attributeItemsService.findAll();
  }

  @Query(() => AttributeItem, { name: 'attributeItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeItemsService.findOne(id);
  }

  @Mutation(() => AttributeItem)
  updateAttributeItem(@Args('updateAttributeItemInput') updateAttributeItemInput: UpdateAttributeItemInput) {
    return this.attributeItemsService.update(updateAttributeItemInput.id, updateAttributeItemInput);
  }

  @Mutation(() => AttributeItem)
  removeAttributeItem(@Args('id', { type: () => Int }) id: number) {
    return this.attributeItemsService.remove(id);
  }
}
