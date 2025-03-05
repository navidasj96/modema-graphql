import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerImageProductService } from './customer-image-product.service';
import { CustomerImageProduct } from './entities/customer-image-product.entity';
import { CreateCustomerImageProductInput } from './dto/create-customer-image-product.input';
import { UpdateCustomerImageProductInput } from './dto/update-customer-image-product.input';

@Resolver(() => CustomerImageProduct)
export class CustomerImageProductResolver {
  constructor(private readonly customerImageProductService: CustomerImageProductService) {}

  @Mutation(() => CustomerImageProduct)
  createCustomerImageProduct(@Args('createCustomerImageProductInput') createCustomerImageProductInput: CreateCustomerImageProductInput) {
    return this.customerImageProductService.create(createCustomerImageProductInput);
  }

  @Query(() => [CustomerImageProduct], { name: 'customerImageProduct' })
  findAll() {
    return this.customerImageProductService.findAll();
  }

  @Query(() => CustomerImageProduct, { name: 'customerImageProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerImageProductService.findOne(id);
  }

  @Mutation(() => CustomerImageProduct)
  updateCustomerImageProduct(@Args('updateCustomerImageProductInput') updateCustomerImageProductInput: UpdateCustomerImageProductInput) {
    return this.customerImageProductService.update(updateCustomerImageProductInput.id, updateCustomerImageProductInput);
  }

  @Mutation(() => CustomerImageProduct)
  removeCustomerImageProduct(@Args('id', { type: () => Int }) id: number) {
    return this.customerImageProductService.remove(id);
  }
}
