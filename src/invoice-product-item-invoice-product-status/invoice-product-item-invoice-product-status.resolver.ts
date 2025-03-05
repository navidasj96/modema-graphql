import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceProductItemInvoiceProductStatusService } from './invoice-product-item-invoice-product-status.service';
import { InvoiceProductItemInvoiceProductStatus } from './entities/invoice-product-item-invoice-product-status.entity';
import { CreateInvoiceProductItemInvoiceProductStatusInput } from './dto/create-invoice-product-item-invoice-product-status.input';
import { UpdateInvoiceProductItemInvoiceProductStatusInput } from './dto/update-invoice-product-item-invoice-product-status.input';

@Resolver(() => InvoiceProductItemInvoiceProductStatus)
export class InvoiceProductItemInvoiceProductStatusResolver {
  constructor(private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService) {}

  @Mutation(() => InvoiceProductItemInvoiceProductStatus)
  createInvoiceProductItemInvoiceProductStatus(@Args('createInvoiceProductItemInvoiceProductStatusInput') createInvoiceProductItemInvoiceProductStatusInput: CreateInvoiceProductItemInvoiceProductStatusInput) {
    return this.invoiceProductItemInvoiceProductStatusService.create(createInvoiceProductItemInvoiceProductStatusInput);
  }

  @Query(() => [InvoiceProductItemInvoiceProductStatus], { name: 'invoiceProductItemInvoiceProductStatus' })
  findAll() {
    return this.invoiceProductItemInvoiceProductStatusService.findAll();
  }

  @Query(() => InvoiceProductItemInvoiceProductStatus, { name: 'invoiceProductItemInvoiceProductStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductItemInvoiceProductStatusService.findOne(id);
  }

  @Mutation(() => InvoiceProductItemInvoiceProductStatus)
  updateInvoiceProductItemInvoiceProductStatus(@Args('updateInvoiceProductItemInvoiceProductStatusInput') updateInvoiceProductItemInvoiceProductStatusInput: UpdateInvoiceProductItemInvoiceProductStatusInput) {
    return this.invoiceProductItemInvoiceProductStatusService.update(updateInvoiceProductItemInvoiceProductStatusInput.id, updateInvoiceProductItemInvoiceProductStatusInput);
  }

  @Mutation(() => InvoiceProductItemInvoiceProductStatus)
  removeInvoiceProductItemInvoiceProductStatus(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductItemInvoiceProductStatusService.remove(id);
  }
}
