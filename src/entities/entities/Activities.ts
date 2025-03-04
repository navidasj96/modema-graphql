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

@Index('activities_deleted_user_id_index', ['deletedUserId'], {})
@Index('activities_user_id_index', ['userId'], {})
@Entity('activities', { schema: 'modema' })
@ObjectType()
export class Activities {
  @Field()
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Field(() => Number)
  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId: number | null;

  @Field()
  @Column('varchar', { name: 'user_name', length: 191 })
  userName: string;

  @Field()
  @Column('int', { name: 'content_id' })
  contentId: number;

  @Field()
  @Column('varchar', { name: 'content_type', length: 191 })
  contentType: string;

  @Field()
  @Column('varchar', { name: 'action', length: 191 })
  action: string;

  @Field()
  @Column('varchar', { name: 'description', length: 191 })
  description: string;

  @Field()
  @Column('text', { name: 'details' })
  details: string;

  @Field()
  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Field()
  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Field()
  @Column('int', { name: 'deleted_user_id', nullable: true, unsigned: true })
  deletedUserId: number | null;

  @Field()
  @ManyToOne(() => Users, (users) => users.activities, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @Field()
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
