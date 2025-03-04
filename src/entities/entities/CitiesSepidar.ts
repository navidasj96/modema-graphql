import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], { unique: true })
@Entity("cities_sepidar", { schema: "modema" })
export class CitiesSepidar {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "state_name", nullable: true, length: 255 })
  stateName: string | null;

  @Column("int", { name: "sepidar_state_id", nullable: true, unsigned: true })
  sepidarStateId: number | null;

  @Column("int", { name: "state_id", nullable: true, unsigned: true })
  stateId: number | null;

  @Column("int", { name: "city_id", nullable: true, unsigned: true })
  cityId: number | null;
}
