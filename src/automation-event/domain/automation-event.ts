import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AutomationEvent {
  @Field()
  id: string;

  @Field()
  typeId: number;

  @Field()
  type: string;

  @Field()
  smsSent: boolean;

  @Field()
  onlineSheetSaved: boolean;

  @Field()
  eventDatetime: Date;

  @Field()
  triggerDatetime: Date;

  @Field()
  event: string;

  @Field()
  eventDate: string;

  @Field()
  eventTimestamp: string;

  @Field()
  rfmScore: string | null;

  @Field()
  rfmCat: string | null;

  @Field()
  userName: string;

  @Field()
  userId: number | null;

  @Field()
  userUid: number;

  @Field()
  userContact: string;

  @Field()
  status: string;

  @Field()
  lastEec: string | null;

  @Field()
  messages: string | null;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  deletedAt: Date | null;

  @Field()
  user: Users;
}
