import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  nameEn?: string;

  @Field(() => [ContactForms])
  contactForms: ContactForms[];
}
