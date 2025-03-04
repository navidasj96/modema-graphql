import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnRequestHistories } from "./ReturnRequestHistories";
import { ReturnRequests } from "./ReturnRequests";

@Index("return_types_name_unique", ["name"], { unique: true })
@Entity("return_types", { schema: "modema" })
export class ReturnTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ReturnRequestHistories,
    (returnRequestHistories) => returnRequestHistories.returnType
  )
  returnRequestHistories: ReturnRequestHistories[];

  @OneToMany(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnType
  )
  returnRequests: ReturnRequests[];
}
