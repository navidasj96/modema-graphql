import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceBankGatewayHistoryService } from './invoice-bank-gateway-history.service';
import { InvoiceBankGatewayHistory } from './entities/invoice-bank-gateway-history.entity';
import { CreateInvoiceBankGatewayHistoryInput } from './dto/create-invoice-bank-gateway-history.input';
import { UpdateInvoiceBankGatewayHistoryInput } from './dto/update-invoice-bank-gateway-history.input';

@Resolver(() => InvoiceBankGatewayHistory)
export class InvoiceBankGatewayHistoryResolver {
  constructor(private readonly invoiceBankGatewayHistoryService: InvoiceBankGatewayHistoryService) {}

  @Mutation(() => InvoiceBankGatewayHistory)
  createInvoiceBankGatewayHistory(@Args('createInvoiceBankGatewayHistoryInput') createInvoiceBankGatewayHistoryInput: CreateInvoiceBankGatewayHistoryInput) {
    return this.invoiceBankGatewayHistoryService.create(createInvoiceBankGatewayHistoryInput);
  }

  @Query(() => [InvoiceBankGatewayHistory], { name: 'invoiceBankGatewayHistory' })
  findAll() {
    return this.invoiceBankGatewayHistoryService.findAll();
  }

  @Query(() => InvoiceBankGatewayHistory, { name: 'invoiceBankGatewayHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceBankGatewayHistoryService.findOne(id);
  }

  @Mutation(() => InvoiceBankGatewayHistory)
  updateInvoiceBankGatewayHistory(@Args('updateInvoiceBankGatewayHistoryInput') updateInvoiceBankGatewayHistoryInput: UpdateInvoiceBankGatewayHistoryInput) {
    return this.invoiceBankGatewayHistoryService.update(updateInvoiceBankGatewayHistoryInput.id, updateInvoiceBankGatewayHistoryInput);
  }

  @Mutation(() => InvoiceBankGatewayHistory)
  removeInvoiceBankGatewayHistory(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceBankGatewayHistoryService.remove(id);
  }
}
