import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ModelHasPermissions } from "./ModelHasPermissions";
import { PermissionGroups } from "./PermissionGroups";
import { Roles } from "./Roles";

@Index("permissions_parent_id_index", ["parentId"], {})
@Index("permissions_permission_group_id_index", ["permissionGroupId"], {})
@Entity("permissions", { schema: "modema" })
export class Permissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "guard_name", length: 191 })
  guardName: string;

  @Column("int", {
    name: "permission_group_id",
    nullable: true,
    unsigned: true,
  })
  permissionGroupId: number | null;

  @Column("int", { name: "parent_id", nullable: true, unsigned: true })
  parentId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ModelHasPermissions,
    (modelHasPermissions) => modelHasPermissions.permission
  )
  modelHasPermissions: ModelHasPermissions[];

  @ManyToOne(() => Permissions, (permissions) => permissions.permissions, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: Permissions;

  @OneToMany(() => Permissions, (permissions) => permissions.parent)
  permissions: Permissions[];

  @ManyToOne(
    () => PermissionGroups,
    (permissionGroups) => permissionGroups.permissions,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "permission_group_id", referencedColumnName: "id" }])
  permissionGroup: PermissionGroups;

  @ManyToMany(() => Roles, (roles) => roles.permissions)
  @JoinTable({
    name: "role_has_permissions",
    joinColumns: [{ name: "permission_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "role_id", referencedColumnName: "id" }],
    schema: "modema",
  })
  roles: Roles[];
}
