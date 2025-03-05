import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceAddressValidationResultService } from './invoice-address-validation-result.service';
import { InvoiceAddressValidationResult } from './entities/invoice-address-validation-result.entity';
import { CreateInvoiceAddressValidationResultInput } from './dto/create-invoice-address-validation-result.input';
import { UpdateInvoiceAddressValidationResultInput } from './dto/update-invoice-address-validation-result.input';

@Resolver(() => InvoiceAddressValidationResult)
export class InvoiceAddressValidationResultResolver {
  constructor(private readonly invoiceAddressValidationResultService: InvoiceAddressValidationResultService) {}

  @Mutation(() => InvoiceAddressValidationResult)
  createInvoiceAddressValidationResult(@Args('createInvoiceAddressValidationResultInput') createInvoiceAddressValidationResultInput: CreateInvoiceAddressValidationResultInput) {
    return this.invoiceAddressValidationResultService.create(createInvoiceAddressValidationResultInput);
  }

  @Query(() => [InvoiceAddressValidationResult], { name: 'invoiceAddressValidationResult' })
  findAll() {
    return this.invoiceAddressValidationResultService.findAll();
  }

  @Query(() => InvoiceAddressValidationResult, { name: 'invoiceAddressValidationResult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceAddressValidationResultService.findOne(id);
  }

  @Mutation(() => InvoiceAddressValidationResult)
  updateInvoiceAddressValidationResult(@Args('updateInvoiceAddressValidationResultInput') updateInvoiceAddressValidationResultInput: UpdateInvoiceAddressValidationResultInput) {
    return this.invoiceAddressValidationResultService.update(updateInvoiceAddressValidationResultInput.id, updateInvoiceAddressValidationResultInput);
  }

  @Mutation(() => InvoiceAddressValidationResult)
  removeInvoiceAddressValidationResult(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceAddressValidationResultService.remove(id);
  }
}
