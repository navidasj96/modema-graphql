import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subproducts } from "./Subproducts";

@Index("recommended_subproducts_subproduct_id_index", ["subproductId"], {})
@Entity("recommended_subproducts", { schema: "mydatabase" })
export class RecommendedSubproducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "subproduct_id", unsigned: true })
  subproductId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.recommendedSubproducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
