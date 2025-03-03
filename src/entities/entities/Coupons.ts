import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CampaignPetForms } from "./CampaignPetForms";
import { CouponSubjects } from "./CouponSubjects";
import { Users } from "./Users";
import { Invoices } from "./Invoices";
import { ReturnRequests } from "./ReturnRequests";
import { UtmGoogleFormCoupons } from "./UtmGoogleFormCoupons";

@Index("coupons_code_unique", ["code"], { unique: true })
@Index("coupons_created_by_index", ["createdBy"], {})
@Index("coupons_retargeting_invoice_id_index", ["retargetingInvoiceId"], {})
@Index("coupons_retargeting_user_id_index", ["retargetingUserId"], {})
@Index("coupons_updated_by_index", ["updatedBy"], {})
@Index("coupons_user_id_index", ["userId"], {})
@Entity("coupons", { schema: "mydatabase" })
export class Coupons {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "code", unique: true, length: 191 })
  code: string;

  @Column("tinyint", {
    name: "off_type",
    comment: "1=Fixed\r\n2=Percent",
    unsigned: true,
  })
  offType: number;

  @Column("decimal", { name: "discount", precision: 18, scale: 2 })
  discount: string;

  @Column("datetime", { name: "start_date" })
  startDate: Date;

  @Column("datetime", { name: "end_date" })
  endDate: Date;

  @Column("int", {
    name: "max_usage",
    comment: "0=>unlimited,x>0 => quantity",
    unsigned: true,
    default: () => "'1'",
  })
  maxUsage: number;

  @Column("decimal", {
    name: "min_invoice_price",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  minInvoicePrice: string | null;

  @Column("decimal", {
    name: "max_discount_price",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  maxDiscountPrice: string | null;

  @Column("tinyint", {
    name: "is_applicable_to_discounted_products",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  isApplicableToDiscountedProducts: number | null;

  @Column("tinyint", {
    name: "for_old_customers_only",
    width: 1,
    default: () => "'0'",
  })
  forOldCustomersOnly: boolean;

  @Column("tinyint", {
    name: "for_ready_products_only",
    width: 1,
    default: () => "'0'",
  })
  forReadyProductsOnly: boolean;

  @Column("int", { name: "user_id", nullable: true, unsigned: true })
  userId: number | null;

  @Column("int", {
    name: "retargeting_user_id",
    nullable: true,
    unsigned: true,
  })
  retargetingUserId: number | null;

  @Column("int", {
    name: "retargeting_invoice_id",
    nullable: true,
    unsigned: true,
  })
  retargetingInvoiceId: number | null;

  @Column("int", { name: "max_percent", nullable: true })
  maxPercent: number | null;

  @Column("tinyint", { name: "only_for_out_of_stocks", default: () => "'0'" })
  onlyForOutOfStocks: number;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @Column("int", { name: "created_by", nullable: true, unsigned: true })
  createdBy: number | null;

  @Column("int", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("tinyint", { name: "only_for_one_item", width: 1 })
  onlyForOneItem: boolean;

  @Column("tinyint", {
    name: "for_new_customers_only",
    width: 1,
    default: () => "'0'",
  })
  forNewCustomersOnly: boolean;

  @OneToMany(
    () => CampaignPetForms,
    (campaignPetForms) => campaignPetForms.coupon
  )
  campaignPetForms: CampaignPetForms[];

  @OneToMany(() => CouponSubjects, (couponSubjects) => couponSubjects.coupon)
  couponSubjects: CouponSubjects[];

  @ManyToOne(() => Users, (users) => users.coupons, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "created_by", referencedColumnName: "id" }])
  createdBy2: Users;

  @ManyToOne(() => Invoices, (invoices) => invoices.coupons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "retargeting_invoice_id", referencedColumnName: "id" }])
  retargetingInvoice: Invoices;

  @ManyToOne(() => Users, (users) => users.coupons2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "retargeting_user_id", referencedColumnName: "id" }])
  retargetingUser: Users;

  @ManyToOne(() => Users, (users) => users.coupons3, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "updated_by", referencedColumnName: "id" }])
  updatedBy2: Users;

  @ManyToOne(() => Users, (users) => users.coupons4, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(() => Invoices, (invoices) => invoices.coupon)
  invoices: Invoices[];

  @OneToMany(() => ReturnRequests, (returnRequests) => returnRequests.coupon)
  returnRequests: ReturnRequests[];

  @OneToMany(
    () => UtmGoogleFormCoupons,
    (utmGoogleFormCoupons) => utmGoogleFormCoupons.coupon
  )
  utmGoogleFormCoupons: UtmGoogleFormCoupons[];
}
