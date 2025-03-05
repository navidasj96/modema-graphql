import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExportProduct {
  @Field()
  1: string;

  @Field({ nullable: true })
  code?: string;

  @Field(() => Float, { nullable: true })
  price?: number;
}
