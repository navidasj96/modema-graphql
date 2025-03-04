import { Column, Entity, Index } from "typeorm";

@Index("tmp_users_idx1", ["userId"], { unique: true })
@Entity("tmp_users", { schema: "modema" })
export class TmpUsers {
  @Column("decimal", {
    name: "user_id",
    nullable: true,
    unique: true,
    precision: 10,
    scale: 0,
  })
  userId: string | null;
}
