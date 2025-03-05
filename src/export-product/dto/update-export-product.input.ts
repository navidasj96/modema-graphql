import { CreateExportProductInput } from './create-export-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExportProductInput extends PartialType(CreateExportProductInput) {
  @Field(() => Int)
  id: number;
}
