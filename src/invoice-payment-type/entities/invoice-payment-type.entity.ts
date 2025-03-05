import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InvoicePaymentHistories } from './InvoicePaymentHistories';
import { InvoicePayments } from './InvoicePayments';
import { PreorderRegisters } from './PreorderRegisters';

@Entity('invoice_payment_types', { schema: 'modema' })
export class InvoicePaymentType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => InvoicePaymentHistories,
    (invoicePaymentHistories) => invoicePaymentHistories.invoicePaymentType,
  )
  invoicePaymentHistories: InvoicePaymentHistories[];

  @OneToMany(
    () => InvoicePayments,
    (invoicePayments) => invoicePayments.invoicePaymentType,
  )
  invoicePayments: InvoicePayments[];

  @OneToMany(
    () => PreorderRegisters,
    (preorderRegisters) => preorderRegisters.paymentType,
  )
  preorderRegisters: PreorderRegisters[];
}
