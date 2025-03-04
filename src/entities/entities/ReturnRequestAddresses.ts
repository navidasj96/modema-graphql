import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./Addresses";
import { Cities } from "./Cities";
import { Countries } from "./Countries";
import { ReturnRequests } from "./ReturnRequests";
import { States } from "./States";
import { Users } from "./Users";

@Index("return_request_addresses_address_id_index", ["addressId"], {})
@Index("return_request_addresses_city_id_index", ["cityId"], {})
@Index("return_request_addresses_country_id_index", ["countryId"], {})
@Index(
  "return_request_addresses_return_request_id_index",
  ["returnRequestId"],
  {}
)
@Index("return_request_addresses_state_id_index", ["stateId"], {})
@Index("return_request_addresses_user_id_index", ["userId"], {})
@Entity("return_request_addresses", { schema: "modema" })
export class ReturnRequestAddresses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "return_request_id", unsigned: true })
  returnRequestId: number;

  @Column("int", { name: "address_id", unsigned: true })
  addressId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "country_id", unsigned: true })
  countryId: number;

  @Column("int", { name: "state_id", unsigned: true })
  stateId: number;

  @Column("int", { name: "city_id", unsigned: true })
  cityId: number;

  @Column("varchar", { name: "fullname", nullable: true, length: 191 })
  fullname: string | null;

  @Column("varchar", { name: "zip_code", nullable: true, length: 191 })
  zipCode: string | null;

  @Column("varchar", {
    name: "address",
    comment: "First Line of Address",
    length: 191,
  })
  address: string;

  @Column("varchar", {
    name: "address2",
    nullable: true,
    comment: "Optional Second Line of Address",
    length: 191,
  })
  address2: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 191 })
  phone: string | null;

  @Column("varchar", { name: "phone2", nullable: true, length: 191 })
  phone2: string | null;

  @Column("varchar", { name: "longitude", nullable: true, length: 191 })
  longitude: string | null;

  @Column("varchar", { name: "latitude", nullable: true, length: 191 })
  latitude: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 191 })
  email: string | null;

  @Column("varchar", { name: "full_address", nullable: true, length: 191 })
  fullAddress: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Addresses, (addresses) => addresses.returnRequestAddresses, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "address_id", referencedColumnName: "id" }])
  address_2: Addresses;

  @ManyToOne(() => Cities, (cities) => cities.returnRequestAddresses, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: Cities;

  @ManyToOne(() => Countries, (countries) => countries.returnRequestAddresses, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "id" }])
  country: Countries;

  @ManyToOne(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnRequestAddresses,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_request_id", referencedColumnName: "id" }])
  returnRequest: ReturnRequests;

  @ManyToOne(() => States, (states) => states.returnRequestAddresses, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "state_id", referencedColumnName: "id" }])
  state: States;

  @ManyToOne(() => Users, (users) => users.returnRequestAddresses, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
