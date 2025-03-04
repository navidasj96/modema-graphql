import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permissions } from "./Permissions";

@Entity("permission_groups", { schema: "modema" })
export class PermissionGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Permissions, (permissions) => permissions.permissionGroup)
  permissions: Permissions[];
}
