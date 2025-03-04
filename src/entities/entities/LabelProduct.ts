import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Labels } from "./Labels";
import { Products } from "./Products";

@Index("label_product_label_id_index", ["labelId"], {})
@Index("label_product_product_id_index", ["productId"], {})
@Entity("label_product", { schema: "modema" })
export class LabelProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "label_id", unsigned: true })
  labelId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Labels, (labels) => labels.labelProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "label_id", referencedColumnName: "id" }])
  label: Labels;

  @ManyToOne(() => Products, (products) => products.labelProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
