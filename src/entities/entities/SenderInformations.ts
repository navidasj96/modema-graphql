import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cities } from "./Cities";
import { Countries } from "./Countries";
import { States } from "./States";

@Index("sender_informations_city_id_foreign", ["cityId"], {})
@Index("sender_informations_country_id_foreign", ["countryId"], {})
@Index("sender_informations_state_id_foreign", ["stateId"], {})
@Entity("sender_informations", { schema: "mydatabase" })
export class SenderInformations {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "contact_id" })
  contactId: number;

  @Column("varchar", { name: "person_name", length: 191 })
  personName: string;

  @Column("varchar", { name: "title", length: 191 })
  title: string;

  @Column("varchar", { name: "company_name", length: 191 })
  companyName: string;

  @Column("varchar", { name: "phone_number", length: 191 })
  phoneNumber: string;

  @Column("varchar", { name: "phone_extension", length: 191 })
  phoneExtension: string;

  @Column("varchar", { name: "pager_number", length: 191 })
  pagerNumber: string;

  @Column("varchar", { name: "fax_number", length: 191 })
  faxNumber: string;

  @Column("varchar", { name: "email_address", length: 191 })
  emailAddress: string;

  @Column("varchar", { name: "street_lines", length: 191 })
  streetLines: string;

  @Column("int", { name: "city_id", nullable: true, unsigned: true })
  cityId: number | null;

  @Column("int", { name: "state_id", nullable: true, unsigned: true })
  stateId: number | null;

  @Column("varchar", { name: "postal_code", length: 191 })
  postalCode: string;

  @Column("int", { name: "country_id", nullable: true, unsigned: true })
  countryId: number | null;

  @Column("varchar", { name: "package_location", length: 191 })
  packageLocation: string;

  @Column("varchar", { name: "building_part", length: 191 })
  buildingPart: string;

  @Column("varchar", { name: "building_part_description", length: 191 })
  buildingPartDescription: string;

  @Column("varchar", { name: "location", length: 191 })
  location: string;

  @Column("text", { name: "remarks" })
  remarks: string;

  @Column("text", { name: "commodity_description" })
  commodityDescription: string;

  @Column("varchar", { name: "latitude", nullable: true, length: 191 })
  latitude: string | null;

  @Column("varchar", { name: "longitude", nullable: true, length: 191 })
  longitude: string | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Cities, (cities) => cities.senderInformations, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: Cities;

  @ManyToOne(() => Countries, (countries) => countries.senderInformations, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "id" }])
  country: Countries;

  @ManyToOne(() => States, (states) => states.senderInformations, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "state_id", referencedColumnName: "id" }])
  state: States;
}
