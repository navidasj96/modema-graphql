import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExportProductService } from './export-product.service';
import { ExportProduct } from './entities/export-product.entity';
import { CreateExportProductInput } from './dto/create-export-product.input';
import { UpdateExportProductInput } from './dto/update-export-product.input';

@Resolver(() => ExportProduct)
export class ExportProductResolver {
  constructor(private readonly exportProductService: ExportProductService) {}

  @Mutation(() => ExportProduct)
  createExportProduct(@Args('createExportProductInput') createExportProductInput: CreateExportProductInput) {
    return this.exportProductService.create(createExportProductInput);
  }

  @Query(() => [ExportProduct], { name: 'exportProduct' })
  findAll() {
    return this.exportProductService.findAll();
  }

  @Query(() => ExportProduct, { name: 'exportProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.exportProductService.findOne(id);
  }

  @Mutation(() => ExportProduct)
  updateExportProduct(@Args('updateExportProductInput') updateExportProductInput: UpdateExportProductInput) {
    return this.exportProductService.update(updateExportProductInput.id, updateExportProductInput);
  }

  @Mutation(() => ExportProduct)
  removeExportProduct(@Args('id', { type: () => Int }) id: number) {
    return this.exportProductService.remove(id);
  }
}
