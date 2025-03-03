import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ModelHasRoles } from "./ModelHasRoles";
import { Permissions } from "./Permissions";

@Entity("roles", { schema: "mydatabase" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "guard_name", length: 191 })
  guardName: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => ModelHasRoles, (modelHasRoles) => modelHasRoles.role)
  modelHasRoles: ModelHasRoles[];

  @ManyToMany(() => Permissions, (permissions) => permissions.roles)
  permissions: Permissions[];
}
