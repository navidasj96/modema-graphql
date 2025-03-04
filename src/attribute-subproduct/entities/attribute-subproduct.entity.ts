import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AttributeSubproduct {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
