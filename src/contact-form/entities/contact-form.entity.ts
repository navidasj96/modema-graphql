import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactFormHistories } from './ContactFormHistories';
import { ContactFormStatuses } from './ContactFormStatuses';
import { Countries } from './Countries';
import { Departments } from './Departments';
import { Users } from './Users';

@Index(
  'contact_forms_contact_form_status_id_index',
  ['contactFormStatusId'],
  {},
)
@Index('contact_forms_country_id_index', ['countryId'], {})
@Index('contact_forms_department_id_index', ['departmentId'], {})
@Index('contact_forms_user_id_index', ['userId'], {})
@Entity('contact_forms', { schema: 'modema' })
export class ContactForm {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email?: string;

  @Column('int', { name: 'department_id', nullable: true, unsigned: true })
  departmentId?: number;

  @Column('text', { name: 'text', nullable: true })
  text?: string;

  @Column('int', {
    name: 'contact_form_status_id',
    unsigned: true,
    default: () => "'1'",
  })
  contactFormStatusId: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', { name: 'country_id', unsigned: true, default: () => "'103'" })
  countryId: number;

  @Column('varchar', { name: 'city', nullable: true, length: 191 })
  city?: string;

  @Column('tinytext', { name: 'answer1', nullable: true })
  answer1?: string;

  @Column('tinytext', { name: 'answer2', nullable: true })
  answer2?: string;

  @Column('tinytext', { name: 'answer3', nullable: true })
  answer3?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ContactFormHistories,
    (contactFormHistories) => contactFormHistories.contactForm,
  )
  contactFormHistories: ContactFormHistories[];

  @ManyToOne(
    () => ContactFormStatuses,
    (contactFormStatuses) => contactFormStatuses.contactForms,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'contact_form_status_id', referencedColumnName: 'id' }])
  contactFormStatus: ContactFormStatuses;

  @ManyToOne(() => Countries, (countries) => countries.contactForms, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Countries;

  @ManyToOne(() => Departments, (departments) => departments.contactForms, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'department_id', referencedColumnName: 'id' }])
  department: Departments;

  @ManyToOne(() => Users, (users) => users.contactForms, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
