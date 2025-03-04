import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PaymentMethodFields } from "./PaymentMethodFields";

@Index("payment_methods_name_unique", ["name"], { unique: true })
@Entity("payment_methods", { schema: "modema" })
export class PaymentMethods {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @OneToMany(
    () => PaymentMethodFields,
    (paymentMethodFields) => paymentMethodFields.paymentMethod
  )
  paymentMethodFields: PaymentMethodFields[];
}
