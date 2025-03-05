import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFedexAddressValidationAttributeInput {
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
