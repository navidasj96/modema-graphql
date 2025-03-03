import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { Subproducts } from "./Subproducts";
import { Tags } from "./Tags";

@Index("product_tag_product_id_index", ["productId"], {})
@Index(
  "product_tag_product_id_subproduct_id_tag_id_unique",
  ["productId", "subproductId", "tagId"],
  { unique: true }
)
@Index("product_tag_subproduct_id_index", ["subproductId"], {})
@Index("product_tag_tag_id_index", ["tagId"], {})
@Entity("product_tag", { schema: "mydatabase" })
export class ProductTag {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "subproduct_id", nullable: true, unsigned: true })
  subproductId: number | null;

  @Column("int", { name: "tag_id", unsigned: true })
  tagId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Products, (products) => products.productTags, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.productTags, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;

  @ManyToOne(() => Tags, (tags) => tags.productTags, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "tag_id", referencedColumnName: "id" }])
  tag: Tags;
}
