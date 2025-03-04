import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAttributeAttributeGroupInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
