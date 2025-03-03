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
import { Users } from "./Users";

@Index("favorite_products_idx1", ["productId", "userId"], { unique: true })
@Index("product_favorites_product_id_index", ["productId"], {})
@Index("product_favorites_subproduct_id_index", ["subproductId"], {})
@Index("product_favorites_user_id_index", ["userId"], {})
@Entity("favorite_products", { schema: "mydatabase" })
export class FavoriteProducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "subproduct_id", nullable: true, unsigned: true })
  subproductId: number | null;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Products, (products) => products.favoriteProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.favoriteProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;

  @ManyToOne(() => Users, (users) => users.favoriteProducts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
