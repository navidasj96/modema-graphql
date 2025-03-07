import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoicePaymentService } from './invoice-payment.service';
import { InvoicePayment } from './entities/invoice-payment.entity';
import { CreateInvoicePaymentInput } from './dto/create-invoice-payment.input';
import { UpdateInvoicePaymentInput } from './dto/update-invoice-payment.input';

@Resolver(() => InvoicePayment)
export class InvoicePaymentResolver {
  constructor(private readonly invoicePaymentService: InvoicePaymentService) {}

  @Mutation(() => InvoicePayment)
  createInvoicePayment(@Args('createInvoicePaymentInput') createInvoicePaymentInput: CreateInvoicePaymentInput) {
    return this.invoicePaymentService.create(createInvoicePaymentInput);
  }

  @Query(() => [InvoicePayment], { name: 'invoicePayment' })
  findAll() {
    return this.invoicePaymentService.findAll();
  }

  @Query(() => InvoicePayment, { name: 'invoicePayment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentService.findOne(id);
  }

  @Mutation(() => InvoicePayment)
  updateInvoicePayment(@Args('updateInvoicePaymentInput') updateInvoicePaymentInput: UpdateInvoicePaymentInput) {
    return this.invoicePaymentService.update(updateInvoicePaymentInput.id, updateInvoicePaymentInput);
  }

  @Mutation(() => InvoicePayment)
  removeInvoicePayment(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentService.remove(id);
  }
}
