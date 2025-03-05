import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HyperstarCode {
  @Field()
  code: string;

  @Field({ nullable: true })
  subproductCode?: string;
}
