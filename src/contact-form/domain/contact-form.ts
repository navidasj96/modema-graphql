import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContactFormHistories } from './ContactFormHistories';
import { ContactFormStatuses } from './ContactFormStatuses';
import { Countries } from './Countries';
import { Departments } from './Departments';
import { Users } from './Users';

@ObjectType()
export class ContactForm {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => Int, { nullable: true })
  departmentId?: number;

  @Field({ nullable: true })
  text?: string;

  @Field(() => Int)
  contactFormStatusId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int)
  countryId: number;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  answer1?: string;

  @Field({ nullable: true })
  answer2?: string;

  @Field({ nullable: true })
  answer3?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ContactFormHistories])
  contactFormHistories: ContactFormHistories[];

  @Field(() => ContactFormStatuses)
  contactFormStatus: ContactFormStatuses;

  @Field(() => Countries)
  country: Countries;

  @Field(() => Departments)
  department: Departments;

  @Field(() => Users)
  user: Users;
}
