import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";
import { PaymentRequests } from "./PaymentRequests";
import { VisitorCoupons } from "./VisitorCoupons";
import { VisitorSales } from "./VisitorSales";
import { Users } from "./Users";
import { VisitorGroups } from "./VisitorGroups";

@Index("visitors_sort_order_index", ["sortOrder"], {})
@Index("visitors_title_unique", ["title"], { unique: true })
@Index("visitors_user_id_index", ["userId"], {})
@Index("visitors_visitor_group_id_index", ["visitorGroupId"], {})
@Entity("visitors", { schema: "mydatabase" })
export class Visitors {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "visitor_group_id", unsigned: true })
  visitorGroupId: number;

  @Column("varchar", { name: "title", unique: true, length: 191 })
  title: string;

  @Column("varchar", { name: "code", comment: "code shenasaei", length: 191 })
  code: string;

  @Column("double", {
    name: "balance",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  balance: number | null;

  @Column("varchar", { name: "card_number", nullable: true, length: 191 })
  cardNumber: string | null;

  @Column("tinyint", {
    name: "is_partner",
    comment: "Aya bazaryab az foroshgah haye hamkar ast ya kheir",
    width: 1,
    default: () => "'0'",
  })
  isPartner: boolean;

  @Column("varchar", {
    name: "partner_code",
    nullable: true,
    comment: "Code Moarref(Baraye Foroshgahhaye Hamkar)",
    length: 191,
  })
  partnerCode: string | null;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @OneToMany(() => Invoices, (invoices) => invoices.visitor)
  invoices: Invoices[];

  @OneToMany(
    () => PaymentRequests,
    (paymentRequests) => paymentRequests.visitor
  )
  paymentRequests: PaymentRequests[];

  @OneToMany(() => VisitorCoupons, (visitorCoupons) => visitorCoupons.visitor)
  visitorCoupons: VisitorCoupons[];

  @OneToMany(() => VisitorSales, (visitorSales) => visitorSales.visitor)
  visitorSales: VisitorSales[];

  @ManyToOne(() => Users, (users) => users.visitors, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => VisitorGroups, (visitorGroups) => visitorGroups.visitors, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "visitor_group_id", referencedColumnName: "id" }])
  visitorGroup: VisitorGroups;
}
