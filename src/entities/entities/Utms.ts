import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserUtm } from "./UserUtm";

@Index(
  "utms_utm_source_utm_medium_unique",
  ["utmSource", "utmMedium", "utmCampaign", "utmContent"],
  { unique: true }
)
@Entity("utms", { schema: "mydatabase" })
export class Utms {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "utm_source", length: 191 })
  utmSource: string;

  @Column("varchar", { name: "utm_medium", nullable: true, length: 191 })
  utmMedium: string | null;

  @Column("varchar", { name: "utm_campaign", nullable: true, length: 191 })
  utmCampaign: string | null;

  @Column("varchar", { name: "utm_content", nullable: true, length: 191 })
  utmContent: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => UserUtm, (userUtm) => userUtm.utm)
  userUtms: UserUtm[];
}
