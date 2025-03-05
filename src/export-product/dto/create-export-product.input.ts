import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExportProductInput {
  @Field()
  1: string;

  @Field({ nullable: true })
  code?: string;

  @Field(() => Float, { nullable: true })
  price?: number;
}
