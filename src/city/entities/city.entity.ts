import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Addresses } from './Addresses';
import { BasicCarpetDesigners } from './BasicCarpetDesigners';
import { States } from './States';
import { InvoiceAddresses } from './InvoiceAddresses';
import { ReturnRequestAddresses } from './ReturnRequestAddresses';
import { SenderInformations } from './SenderInformations';

@Index('cities_chapar_id_index', ['chaparId'], {})
@Index('cities_mahex_code_index', ['mahexCode'], {})
@Index('cities_state_id_index', ['stateId'], {})
@Index('cities_tipax_id_index', ['tipaxId'], {})
@Entity('cities', { schema: 'modema' })
export class City {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'state_id', unsigned: true })
  stateId: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('int', { name: 'chapar_id', nullable: true })
  chaparId?: number;

  @Column('int', { name: 'tipax_id', nullable: true })
  tipaxId?: number;

  @Column('varchar', { name: 'mahex_code', nullable: true, length: 191 })
  mahexCode?: string;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Addresses, (addresses) => addresses.city)
  addresses: Addresses[];

  @OneToMany(
    () => BasicCarpetDesigners,
    (basicCarpetDesigners) => basicCarpetDesigners.city,
  )
  basicCarpetDesigners: BasicCarpetDesigners[];

  @ManyToOne(() => States, (states) => states.cities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state: States;

  @OneToMany(
    () => InvoiceAddresses,
    (invoiceAddresses) => invoiceAddresses.city,
  )
  invoiceAddresses: InvoiceAddresses[];

  @OneToMany(
    () => ReturnRequestAddresses,
    (returnRequestAddresses) => returnRequestAddresses.city,
  )
  returnRequestAddresses: ReturnRequestAddresses[];

  @OneToMany(
    () => SenderInformations,
    (senderInformations) => senderInformations.city,
  )
  senderInformations: SenderInformations[];
}
