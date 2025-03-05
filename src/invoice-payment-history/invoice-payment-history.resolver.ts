import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoicePaymentHistoryService } from './invoice-payment-history.service';
import { InvoicePaymentHistory } from './entities/invoice-payment-history.entity';
import { CreateInvoicePaymentHistoryInput } from './dto/create-invoice-payment-history.input';
import { UpdateInvoicePaymentHistoryInput } from './dto/update-invoice-payment-history.input';

@Resolver(() => InvoicePaymentHistory)
export class InvoicePaymentHistoryResolver {
  constructor(private readonly invoicePaymentHistoryService: InvoicePaymentHistoryService) {}

  @Mutation(() => InvoicePaymentHistory)
  createInvoicePaymentHistory(@Args('createInvoicePaymentHistoryInput') createInvoicePaymentHistoryInput: CreateInvoicePaymentHistoryInput) {
    return this.invoicePaymentHistoryService.create(createInvoicePaymentHistoryInput);
  }

  @Query(() => [InvoicePaymentHistory], { name: 'invoicePaymentHistory' })
  findAll() {
    return this.invoicePaymentHistoryService.findAll();
  }

  @Query(() => InvoicePaymentHistory, { name: 'invoicePaymentHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentHistoryService.findOne(id);
  }

  @Mutation(() => InvoicePaymentHistory)
  updateInvoicePaymentHistory(@Args('updateInvoicePaymentHistoryInput') updateInvoicePaymentHistoryInput: UpdateInvoicePaymentHistoryInput) {
    return this.invoicePaymentHistoryService.update(updateInvoicePaymentHistoryInput.id, updateInvoicePaymentHistoryInput);
  }

  @Mutation(() => InvoicePaymentHistory)
  removeInvoicePaymentHistory(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentHistoryService.remove(id);
  }
}
