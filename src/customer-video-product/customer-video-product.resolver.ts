import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerVideoProductService } from './customer-video-product.service';
import { CustomerVideoProduct } from './entities/customer-video-product.entity';
import { CreateCustomerVideoProductInput } from './dto/create-customer-video-product.input';
import { UpdateCustomerVideoProductInput } from './dto/update-customer-video-product.input';

@Resolver(() => CustomerVideoProduct)
export class CustomerVideoProductResolver {
  constructor(private readonly customerVideoProductService: CustomerVideoProductService) {}

  @Mutation(() => CustomerVideoProduct)
  createCustomerVideoProduct(@Args('createCustomerVideoProductInput') createCustomerVideoProductInput: CreateCustomerVideoProductInput) {
    return this.customerVideoProductService.create(createCustomerVideoProductInput);
  }

  @Query(() => [CustomerVideoProduct], { name: 'customerVideoProduct' })
  findAll() {
    return this.customerVideoProductService.findAll();
  }

  @Query(() => CustomerVideoProduct, { name: 'customerVideoProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerVideoProductService.findOne(id);
  }

  @Mutation(() => CustomerVideoProduct)
  updateCustomerVideoProduct(@Args('updateCustomerVideoProductInput') updateCustomerVideoProductInput: UpdateCustomerVideoProductInput) {
    return this.customerVideoProductService.update(updateCustomerVideoProductInput.id, updateCustomerVideoProductInput);
  }

  @Mutation(() => CustomerVideoProduct)
  removeCustomerVideoProduct(@Args('id', { type: () => Int }) id: number) {
    return this.customerVideoProductService.remove(id);
  }
}
