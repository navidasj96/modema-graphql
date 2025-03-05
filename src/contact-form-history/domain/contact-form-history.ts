import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContactForms } from './ContactForms';
import { ContactFormStatuses } from './ContactFormStatuses';
import { Users } from './Users';

@ObjectType()
export class ContactFormHistory {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  contactFormId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  contactFormStatusId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ContactForms)
  contactForm: ContactForms;

  @Field(() => ContactFormStatuses)
  contactFormStatus: ContactFormStatuses;

  @Field(() => Users)
  user: Users;
}
