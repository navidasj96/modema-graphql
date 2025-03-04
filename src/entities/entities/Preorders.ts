import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PreorderPreorderStatus } from "./PreorderPreorderStatus";
import { Users } from "./Users";
import { PreorderStatuses } from "./PreorderStatuses";
import { Products } from "./Products";
import { Subproducts } from "./Subproducts";

@Index("preorders_assigned_user_id_index", ["assignedUserId"], {})
@Index("preorders_preorder_status_id_index", ["preorderStatusId"], {})
@Index("preorders_product_id_index", ["productId"], {})
@Index("preorders_sales_person_id_index", ["salesPersonId"], {})
@Index("preorders_subproduct_id_index", ["subproductId"], {})
@Index("preorders_user_id_index", ["userId"], {})
@Entity("preorders", { schema: "modema" })
export class Preorders {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 191 })
  phone: string | null;

  @Column("int", { name: "product_id", nullable: true, unsigned: true })
  productId: number | null;

  @Column("int", { name: "subproduct_id", nullable: true, unsigned: true })
  subproductId: number | null;

  @Column("int", { name: "preorder_status_id", unsigned: true })
  preorderStatusId: number;

  @Column("int", { name: "user_id", nullable: true, unsigned: true })
  userId: number | null;

  @Column("text", { name: "customer_description", nullable: true })
  customerDescription: string | null;

  @Column("text", { name: "company_description", nullable: true })
  companyDescription: string | null;

  @Column("varchar", { name: "phone2", nullable: true, length: 191 })
  phone2: string | null;

  @Column("varchar", { name: "tracking_code", nullable: true, length: 191 })
  trackingCode: string | null;

  @Column("varchar", { name: "activation_code", nullable: true, length: 191 })
  activationCode: string | null;

  @Column("date", { name: "date_of_turn", nullable: true })
  dateOfTurn: string | null;

  @Column("int", { name: "activation_send_turn", default: () => "'1000'" })
  activationSendTurn: number;

  @Column("datetime", { name: "last_call_date", nullable: true })
  lastCallDate: Date | null;

  @Column("datetime", { name: "expiration_date", nullable: true })
  expirationDate: Date | null;

  @Column("tinyint", { name: "is_activated", width: 1, default: () => "'0'" })
  isActivated: boolean;

  @Column("int", { name: "sales_person_id", nullable: true, unsigned: true })
  salesPersonId: number | null;

  @Column("int", { name: "assigned_user_id", nullable: true, unsigned: true })
  assignedUserId: number | null;

  @Column("datetime", { name: "activation_send_date", nullable: true })
  activationSendDate: Date | null;

  @Column("varchar", { name: "created_at_p", nullable: true, length: 191 })
  createdAtP: string | null;

  @Column("varchar", { name: "date_of_turn_p", nullable: true, length: 191 })
  dateOfTurnP: string | null;

  @Column("varchar", {
    name: "activation_send_date_p",
    nullable: true,
    length: 191,
  })
  activationSendDateP: string | null;

  @Column("varchar", { name: "last_call_date_p", nullable: true, length: 191 })
  lastCallDateP: string | null;

  @Column("varchar", { name: "expiration_date_p", nullable: true, length: 191 })
  expirationDateP: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(
    () => PreorderPreorderStatus,
    (preorderPreorderStatus) => preorderPreorderStatus.preorder
  )
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @ManyToOne(() => Users, (users) => users.preorders, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "assigned_user_id", referencedColumnName: "id" }])
  assignedUser: Users;

  @ManyToOne(
    () => PreorderStatuses,
    (preorderStatuses) => preorderStatuses.preorders,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "preorder_status_id", referencedColumnName: "id" }])
  preorderStatus: PreorderStatuses;

  @ManyToOne(() => Products, (products) => products.preorders, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Users, (users) => users.preorders2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "sales_person_id", referencedColumnName: "id" }])
  salesPerson: Users;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.preorders, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;

  @ManyToOne(() => Users, (users) => users.preorders3, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
