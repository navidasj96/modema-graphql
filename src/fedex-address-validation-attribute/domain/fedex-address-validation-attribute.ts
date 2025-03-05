import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class FedexAddressValidationAttribute {
  @Field(() => Int)
  id: number;

  @Field()
  code: string;

  @Field()
  correctValue: boolean;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
