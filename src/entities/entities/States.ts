import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./Addresses";
import { BasicCarpetDesigners } from "./BasicCarpetDesigners";
import { Cities } from "./Cities";
import { InvoiceAddresses } from "./InvoiceAddresses";
import { ReturnRequestAddresses } from "./ReturnRequestAddresses";
import { SenderInformations } from "./SenderInformations";
import { Countries } from "./Countries";

@Index("states_chapar_id_index", ["chaparId"], {})
@Index("states_country_id_index", ["countryId"], {})
@Index("states_tipax_id_index", ["tipaxId"], {})
@Entity("states", { schema: "modema" })
export class States {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "country_id", unsigned: true })
  countryId: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "code", nullable: true, length: 5 })
  code: string | null;

  @Column("int", { name: "chapar_id", nullable: true })
  chaparId: number | null;

  @Column("int", { name: "tipax_id", nullable: true })
  tipaxId: number | null;

  @Column("int", { name: "sepidar_id", nullable: true })
  sepidarId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Addresses, (addresses) => addresses.state)
  addresses: Addresses[];

  @OneToMany(
    () => BasicCarpetDesigners,
    (basicCarpetDesigners) => basicCarpetDesigners.state
  )
  basicCarpetDesigners: BasicCarpetDesigners[];

  @OneToMany(() => Cities, (cities) => cities.state)
  cities: Cities[];

  @OneToMany(
    () => InvoiceAddresses,
    (invoiceAddresses) => invoiceAddresses.state
  )
  invoiceAddresses: InvoiceAddresses[];

  @OneToMany(
    () => ReturnRequestAddresses,
    (returnRequestAddresses) => returnRequestAddresses.state
  )
  returnRequestAddresses: ReturnRequestAddresses[];

  @OneToMany(
    () => SenderInformations,
    (senderInformations) => senderInformations.state
  )
  senderInformations: SenderInformations[];

  @ManyToOne(() => Countries, (countries) => countries.states, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "id" }])
  country: Countries;
}
