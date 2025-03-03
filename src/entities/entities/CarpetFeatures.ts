import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarpetFeatureUser } from "./CarpetFeatureUser";

@Index("carpet_features_sort_order_index", ["sortOrder"], {})
@Entity("carpet_features", { schema: "mydatabase" })
export class CarpetFeatures {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", length: 191 })
  title: string;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => CarpetFeatureUser,
    (carpetFeatureUser) => carpetFeatureUser.carpetFeature
  )
  carpetFeatureUsers: CarpetFeatureUser[];
}
