import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceProductItemService } from './invoice-product-item.service';
import { InvoiceProductItem } from './entities/invoice-product-item.entity';
import { CreateInvoiceProductItemInput } from './dto/create-invoice-product-item.input';
import { UpdateInvoiceProductItemInput } from './dto/update-invoice-product-item.input';

@Resolver(() => InvoiceProductItem)
export class InvoiceProductItemResolver {
  constructor(private readonly invoiceProductItemService: InvoiceProductItemService) {}

  @Mutation(() => InvoiceProductItem)
  createInvoiceProductItem(@Args('createInvoiceProductItemInput') createInvoiceProductItemInput: CreateInvoiceProductItemInput) {
    return this.invoiceProductItemService.create(createInvoiceProductItemInput);
  }

  @Query(() => [InvoiceProductItem], { name: 'invoiceProductItem' })
  findAll() {
    return this.invoiceProductItemService.findAll();
  }

  @Query(() => InvoiceProductItem, { name: 'invoiceProductItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductItemService.findOne(id);
  }

  @Mutation(() => InvoiceProductItem)
  updateInvoiceProductItem(@Args('updateInvoiceProductItemInput') updateInvoiceProductItemInput: UpdateInvoiceProductItemInput) {
    return this.invoiceProductItemService.update(updateInvoiceProductItemInput.id, updateInvoiceProductItemInput);
  }

  @Mutation(() => InvoiceProductItem)
  removeInvoiceProductItem(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductItemService.remove(id);
  }
}
