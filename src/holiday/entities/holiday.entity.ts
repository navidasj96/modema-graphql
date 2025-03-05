import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';

@Index('holidays_holiday_date_unique', ['holidayDate'], { unique: true })
@Index('holidays_user_id_index', ['userId'], {})
@Entity('holidays', { schema: 'modema' })
export class Holiday {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  @Column('date', { name: 'holiday_date', unique: true })
  holidayDate: Date;

  @Column('tinyint', { name: 'weekday', comment: '0=Sunday, 6=Saturday' })
  weekday: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @ManyToOne(() => Users, (users) => users.holidays, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user?: Users;
}
