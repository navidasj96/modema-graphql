import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CrmPresentation {
  @Field({ nullable: true })
  mobile?: string;

  @Field(() => Int, { nullable: true })
  optionId?: number;
}
