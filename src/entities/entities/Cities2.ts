import { Column, Entity } from "typeorm";

@Entity("cities2", { schema: "modema" })
export class Cities2 {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("int", { name: "sepidar_id", nullable: true })
  sepidarId: number | null;
}
