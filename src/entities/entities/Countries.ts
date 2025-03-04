import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./Addresses";
import { BasicCarpetDesigners } from "./BasicCarpetDesigners";
import { ContactForms } from "./ContactForms";
import { InvoiceAddresses } from "./InvoiceAddresses";
import { ReturnRequestAddresses } from "./ReturnRequestAddresses";
import { SenderInformations } from "./SenderInformations";
import { States } from "./States";

@Index("countries_chapar_id_index", ["chaparId"], {})
@Index("countries_phone_code_index", ["phoneCode"], {})
@Index("countries_tipax_id_index", ["tipaxId"], {})
@Index("sort_name", ["sortName"], { unique: true })
@Entity("countries", { schema: "modema" })
export class Countries {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "sort_name",
    nullable: true,
    unique: true,
    length: 3,
  })
  sortName: string | null;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("int", { name: "phone_code", nullable: true, unsigned: true })
  phoneCode: number | null;

  @Column("int", { name: "chapar_id", nullable: true })
  chaparId: number | null;

  @Column("int", { name: "tipax_id", nullable: true })
  tipaxId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Addresses, (addresses) => addresses.country)
  addresses: Addresses[];

  @OneToMany(
    () => BasicCarpetDesigners,
    (basicCarpetDesigners) => basicCarpetDesigners.country
  )
  basicCarpetDesigners: BasicCarpetDesigners[];

  @OneToMany(() => ContactForms, (contactForms) => contactForms.country)
  contactForms: ContactForms[];

  @OneToMany(
    () => InvoiceAddresses,
    (invoiceAddresses) => invoiceAddresses.country
  )
  invoiceAddresses: InvoiceAddresses[];

  @OneToMany(
    () => ReturnRequestAddresses,
    (returnRequestAddresses) => returnRequestAddresses.country
  )
  returnRequestAddresses: ReturnRequestAddresses[];

  @OneToMany(
    () => SenderInformations,
    (senderInformations) => senderInformations.country
  )
  senderInformations: SenderInformations[];

  @OneToMany(() => States, (states) => states.country)
  states: States[];
}
