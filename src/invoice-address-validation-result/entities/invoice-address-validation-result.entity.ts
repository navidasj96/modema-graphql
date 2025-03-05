import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Addresses } from './Addresses';
import { Invoices } from './Invoices';

@Index('invoice_address_validation_results_address_id_index', ['addressId'], {})
@Index('invoice_address_validation_results_invoice_id_index', ['invoiceId'], {})
@Entity('invoice_address_validation_results', { schema: 'modema' })
export class InvoiceAddressValidationResult {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'address_id', unsigned: true })
  addressId: number;

  @Column('longtext', { name: 'address_validation_result' })
  addressValidationResult: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => Addresses,
    (addresses) => addresses.invoiceAddressValidationResults,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'id' }])
  address: Addresses;

  @ManyToOne(
    () => Invoices,
    (invoices) => invoices.invoiceAddressValidationResults,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoices;
}
