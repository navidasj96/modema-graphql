import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Invoices } from './Invoices';

@Entity('invoice_payment_statuses', { schema: 'modema' })
export class InvoicePaymentStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Invoices, (invoices) => invoices.invoicePaymentStatus)
  invoices: Invoices[];

  @OneToMany(() => Invoices, (invoices) => invoices.replacementPaymentStatus)
  invoices2: Invoices[];
}
