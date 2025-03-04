import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAttributeSubproductInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
