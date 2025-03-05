import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceNegotiationService } from './invoice-negotiation.service';
import { InvoiceNegotiation } from './entities/invoice-negotiation.entity';
import { CreateInvoiceNegotiationInput } from './dto/create-invoice-negotiation.input';
import { UpdateInvoiceNegotiationInput } from './dto/update-invoice-negotiation.input';

@Resolver(() => InvoiceNegotiation)
export class InvoiceNegotiationResolver {
  constructor(private readonly invoiceNegotiationService: InvoiceNegotiationService) {}

  @Mutation(() => InvoiceNegotiation)
  createInvoiceNegotiation(@Args('createInvoiceNegotiationInput') createInvoiceNegotiationInput: CreateInvoiceNegotiationInput) {
    return this.invoiceNegotiationService.create(createInvoiceNegotiationInput);
  }

  @Query(() => [InvoiceNegotiation], { name: 'invoiceNegotiation' })
  findAll() {
    return this.invoiceNegotiationService.findAll();
  }

  @Query(() => InvoiceNegotiation, { name: 'invoiceNegotiation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceNegotiationService.findOne(id);
  }

  @Mutation(() => InvoiceNegotiation)
  updateInvoiceNegotiation(@Args('updateInvoiceNegotiationInput') updateInvoiceNegotiationInput: UpdateInvoiceNegotiationInput) {
    return this.invoiceNegotiationService.update(updateInvoiceNegotiationInput.id, updateInvoiceNegotiationInput);
  }

  @Mutation(() => InvoiceNegotiation)
  removeInvoiceNegotiation(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceNegotiationService.remove(id);
  }
}
