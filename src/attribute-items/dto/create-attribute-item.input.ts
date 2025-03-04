import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAttributeItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
