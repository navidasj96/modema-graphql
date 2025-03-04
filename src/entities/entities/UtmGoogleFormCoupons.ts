import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Coupons } from "./Coupons";
import { Users } from "./Users";

@Index("utm_google_form_coupons_coupon_id_index", ["couponId"], {})
@Index("utm_google_form_coupons_user_id_index", ["userId"], {})
@Entity("utm_google_form_coupons", { schema: "modema" })
export class UtmGoogleFormCoupons {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "type",
    length: 191,
    default: () => "'regestered'",
  })
  type: string;

  @Column("int", { name: "coupon_id", nullable: true, unsigned: true })
  couponId: number | null;

  @Column("int", { name: "row", nullable: true })
  row: number | null;

  @Column("varchar", { name: "utm_link", nullable: true, length: 191 })
  utmLink: string | null;

  @Column("varchar", { name: "short_link", nullable: true, length: 191 })
  shortLink: string | null;

  @Column("datetime", { name: "register_date", nullable: true })
  registerDate: Date | null;

  @Column("datetime", { name: "last_purchase_date", nullable: true })
  lastPurchaseDate: Date | null;

  @Column("datetime", { name: "return_date", nullable: true })
  returnDate: Date | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Coupons, (coupons) => coupons.utmGoogleFormCoupons, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "coupon_id", referencedColumnName: "id" }])
  coupon: Coupons;

  @ManyToOne(() => Users, (users) => users.utmGoogleFormCoupons, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
