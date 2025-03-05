import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceProductItems } from './InvoiceProductItems';

@Entity('damage_reasons', { schema: 'modema' })
export class DamageReason {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'department', length: 191 })
  department: string;

  @Column('varchar', { name: 'cause', length: 191 })
  cause: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => InvoiceProductItems,
    (invoiceProductItems) => invoiceProductItems.damageReason,
  )
  invoiceProductItems: InvoiceProductItems[];
}
