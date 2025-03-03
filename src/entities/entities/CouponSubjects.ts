import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetSizes } from "./BasicCarpetSizes";
import { Coupons } from "./Coupons";
import { ProductCategories } from "./ProductCategories";
import { Products } from "./Products";
import { Subproducts } from "./Subproducts";

@Index("coupon_subjects_basic_carpet_size_id_index", ["basicCarpetSizeId"], {})
@Index("coupon_subjects_coupon_id_index", ["couponId"], {})
@Index("coupon_subjects_product_category_id_index", ["productCategoryId"], {})
@Index("coupon_subjects_product_id_index", ["productId"], {})
@Index("coupon_subjects_subproduct_id_index", ["subproductId"], {})
@Entity("coupon_subjects", { schema: "mydatabase" })
export class CouponSubjects {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "coupon_id", unsigned: true })
  couponId: number;

  @Column("int", {
    name: "product_category_id",
    nullable: true,
    unsigned: true,
  })
  productCategoryId: number | null;

  @Column("int", { name: "product_id", nullable: true, unsigned: true })
  productId: number | null;

  @Column("int", { name: "subproduct_id", nullable: true, unsigned: true })
  subproductId: number | null;

  @Column("int", {
    name: "basic_carpet_size_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.couponSubjects,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_size_id", referencedColumnName: "id" }])
  basicCarpetSize: BasicCarpetSizes;

  @ManyToOne(() => Coupons, (coupons) => coupons.couponSubjects, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "coupon_id", referencedColumnName: "id" }])
  coupon: Coupons;

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.couponSubjects,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "product_category_id", referencedColumnName: "id" }])
  productCategory: ProductCategories;

  @ManyToOne(() => Products, (products) => products.couponSubjects, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.couponSubjects, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
