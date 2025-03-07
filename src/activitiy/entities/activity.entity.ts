import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../../entities/entities/Users';

@Index('activities_deleted_user_id_index', ['deletedUserId'], {})
@Index('activities_user_id_index', ['userId'], {})
@Entity('activities', { schema: 'modema' })
export class Activity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId: number | null;

  @Column('varchar', { name: 'user_name', length: 191 })
  userName: string;

  @Column('int', { name: 'content_id' })
  contentId: number;

  @Column('varchar', { name: 'content_type', length: 191 })
  contentType: string;

  @Column('varchar', { name: 'action', length: 191 })
  action: string;

  @Column('varchar', { name: 'description', length: 191 })
  description: string;

  @Column('text', { name: 'details' })
  details: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'deleted_user_id', nullable: true, unsigned: true })
  deletedUserId: number | null;

  @ManyToOne(() => Users, (users) => users.activities, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
