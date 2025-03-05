import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContactForms } from './ContactForms';

@ObjectType()
export class Department {
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
