import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Roles } from "./Roles";

@Index(
  "model_has_roles_model_type_model_id_index",
  ["modelType", "modelId"],
  {}
)
@Entity("model_has_roles", { schema: "modema" })
export class ModelHasRoles {
  @Column("int", { primary: true, name: "role_id", unsigned: true })
  roleId: number;

  @Column("varchar", { primary: true, name: "model_type", length: 191 })
  modelType: string;

  @Column("bigint", { primary: true, name: "model_id", unsigned: true })
  modelId: string;

  @ManyToOne(() => Roles, (roles) => roles.modelHasRoles, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Roles;
}
