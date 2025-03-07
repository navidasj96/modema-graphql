import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceProductService } from './invoice-product.service';
import { InvoiceProduct } from './entities/invoice-product.entity';
import { CreateInvoiceProductInput } from './dto/create-invoice-product.input';
import { UpdateInvoiceProductInput } from './dto/update-invoice-product.input';

@Resolver(() => InvoiceProduct)
export class InvoiceProductResolver {
  constructor(private readonly invoiceProductService: InvoiceProductService) {}

  @Mutation(() => InvoiceProduct)
  createInvoiceProduct(@Args('createInvoiceProductInput') createInvoiceProductInput: CreateInvoiceProductInput) {
    return this.invoiceProductService.create(createInvoiceProductInput);
  }

  @Query(() => [InvoiceProduct], { name: 'invoiceProduct' })
  findAll() {
    return this.invoiceProductService.findAll();
  }

  @Query(() => InvoiceProduct, { name: 'invoiceProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductService.findOne(id);
  }

  @Mutation(() => InvoiceProduct)
  updateInvoiceProduct(@Args('updateInvoiceProductInput') updateInvoiceProductInput: UpdateInvoiceProductInput) {
    return this.invoiceProductService.update(updateInvoiceProductInput.id, updateInvoiceProductInput);
  }

  @Mutation(() => InvoiceProduct)
  removeInvoiceProduct(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductService.remove(id);
  }
}
