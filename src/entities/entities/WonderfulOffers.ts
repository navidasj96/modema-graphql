import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";

@Index("wonderful_offers_product_id_index", ["productId"], {})
@Entity("wonderful_offers", { schema: "mydatabase" })
export class WonderfulOffers {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("tinyint", { name: "day_of_week", default: () => "'1'" })
  dayOfWeek: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Products, (products) => products.wonderfulOffers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
