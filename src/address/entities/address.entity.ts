import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cities } from '@/entities/entities//Cities';
import { Countries } from '@/entities/entities//Countries';
import { States } from '@/entities/entities//States';
import { Users } from '@/entities/entities//Users';
import { InvoiceAddressValidationResults } from '@/entities/entities//InvoiceAddressValidationResults';
import { InvoiceAddresses } from '@/entities/entities//InvoiceAddresses';
import { InvoiceRatesResults } from '@/entities/entities//InvoiceRatesResults';
import { Invoices } from '@/entities/entities/Invoices';
import { ReturnRequestAddresses } from '@/entities/entities//ReturnRequestAddresses';

@Index('addresses_city_id_index', ['cityId'], {})
@Index('addresses_country_id_index', ['countryId'], {})
@Index('addresses_crm_company_id_index', ['crmCompanyId'], {})
@Index('addresses_crm_company_person_id_index', ['crmCompanyPersonId'], {})
@Index('addresses_state_id_index', ['stateId'], {})
@Index('addresses_user_id_index', ['userId'], {})
@Entity('addresses', { schema: 'modema' })
export class Address {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'country_id', unsigned: true })
  countryId: number;

  @Column('int', { name: 'state_id', unsigned: true })
  stateId: number;

  @Column('int', { name: 'city_id', unsigned: true })
  cityId: number;

  @Column('varchar', { name: 'fullname', nullable: true, length: 191 })
  fullname: string | null;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode: string | null;

  @Column('varchar', {
    name: 'address',
    comment: 'First Line of Address',
    length: 191,
  })
  address: string;

  @Column('varchar', {
    name: 'address2',
    nullable: true,
    comment: 'Optional Second Line of Address',
    length: 191,
  })
  address2: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone: string | null;

  @Column('varchar', { name: 'phone2', nullable: true, length: 191 })
  phone2: string | null;

  @Column('varchar', { name: 'longitude', nullable: true, length: 191 })
  longitude: string | null;

  @Column('varchar', { name: 'latitude', nullable: true, length: 191 })
  latitude: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email: string | null;

  @Column('text', { name: 'full_address', nullable: true })
  fullAddress: string | null;

  @Column('varchar', { name: 'national_id', nullable: true, length: 191 })
  nationalId: string | null;

  @Column('bigint', { name: 'crm_company_id', nullable: true, unsigned: true })
  crmCompanyId: string | null;

  @Column('bigint', {
    name: 'crm_company_person_id',
    nullable: true,
    unsigned: true,
  })
  crmCompanyPersonId: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @Column('text', { name: 'old_address' })
  oldAddress: string;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId: number | null;

  @Column('varchar', { name: 'fullname_trimmed', nullable: true, length: 255 })
  fullnameTrimmed: string | null;

  @Column('varchar', {
    name: 'fullname_description',
    nullable: true,
    length: 255,
  })
  fullnameDescription: string | null;

  @ManyToOne(() => Cities, (cities) => cities.addresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'city_id', referencedColumnName: 'id' }])
  city: Cities;

  @ManyToOne(() => Countries, (countries) => countries.addresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Countries;

  @ManyToOne(() => States, (states) => states.addresses, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state: States;

  @ManyToOne(() => Users, (users) => users.addresses, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;

  @OneToMany(
    () => InvoiceAddressValidationResults,
    (invoiceAddressValidationResults) =>
      invoiceAddressValidationResults.address,
  )
  invoiceAddressValidationResults: InvoiceAddressValidationResults[];

  @OneToMany(
    () => InvoiceAddresses,
    (invoiceAddresses) => invoiceAddresses.address_2,
  )
  invoiceAddresses: InvoiceAddresses[];

  @OneToMany(
    () => InvoiceRatesResults,
    (invoiceRatesResults) => invoiceRatesResults.address,
  )
  invoiceRatesResults: InvoiceRatesResults[];

  @OneToMany(() => Invoices, (invoices) => invoices.address)
  invoices: Invoices[];

  @OneToMany(
    () => ReturnRequestAddresses,
    (returnRequestAddresses) => returnRequestAddresses.address_2,
  )
  returnRequestAddresses: ReturnRequestAddresses[];
}
