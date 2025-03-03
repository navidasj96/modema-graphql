import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DiscountSubjects } from "./DiscountSubjects";
import { Users } from "./Users";
import { IncredibleOffers } from "./IncredibleOffers";
import { InvoiceProductHistories } from "./InvoiceProductHistories";
import { InvoiceProducts } from "./InvoiceProducts";

@Index("discounts_created_by_index", ["createdBy"], {})
@Index("discounts_end_date_index", ["endDate"], {})
@Index("discounts_has_stock_count_only_index", ["hasStockCountOnly"], {})
@Index("discounts_is_active_index", ["isActive"], {})
@Index("discounts_start_date_index", ["startDate"], {})
@Index("discounts_type_index", ["type"], {})
@Index("discounts_updated_by_index", ["updatedBy"], {})
@Index("discounts_with_pad_index", ["withPad"], {})
@Entity("discounts", { schema: "mydatabase" })
export class Discounts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("tinyint", {
    name: "type",
    comment: "1=Fixed\r\n2=Percent",
    unsigned: true,
  })
  type: number;

  @Column("decimal", { name: "discount", precision: 18, scale: 2 })
  discount: string;

  @Column("datetime", { name: "start_date" })
  startDate: Date;

  @Column("datetime", { name: "end_date" })
  endDate: Date;

  @Column("decimal", {
    name: "min_product_price",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  minProductPrice: string | null;

  @Column("decimal", {
    name: "max_discount_price",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  maxDiscountPrice: string | null;

  @Column("tinyint", { name: "with_pad", width: 1, default: () => "'0'" })
  withPad: boolean;

  @Column("tinyint", {
    name: "redis_is_deleted",
    width: 1,
    default: () => "'0'",
  })
  redisIsDeleted: boolean;

  @Column("tinyint", {
    name: "redis_for_showoff_is_deleted",
    width: 1,
    default: () => "'0'",
  })
  redisForShowoffIsDeleted: boolean;

  @Column("datetime", { name: "showoff_start_date", nullable: true })
  showoffStartDate: Date | null;

  @Column("datetime", { name: "showoff_end_date", nullable: true })
  showoffEndDate: Date | null;

  @Column("tinyint", {
    name: "has_stock_count_only",
    width: 1,
    default: () => "'0'",
  })
  hasStockCountOnly: boolean;

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

  @OneToMany(
    () => DiscountSubjects,
    (discountSubjects) => discountSubjects.discount
  )
  discountSubjects: DiscountSubjects[];

  @ManyToOne(() => Users, (users) => users.discounts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "created_by", referencedColumnName: "id" }])
  createdBy2: Users;

  @ManyToOne(() => Users, (users) => users.discounts2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "updated_by", referencedColumnName: "id" }])
  updatedBy2: Users;

  @OneToMany(
    () => IncredibleOffers,
    (incredibleOffers) => incredibleOffers.discount
  )
  incredibleOffers: IncredibleOffers[];

  @OneToMany(
    () => InvoiceProductHistories,
    (invoiceProductHistories) => invoiceProductHistories.discount_2
  )
  invoiceProductHistories: InvoiceProductHistories[];

  @OneToMany(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.discount_2
  )
  invoiceProducts: InvoiceProducts[];
}
