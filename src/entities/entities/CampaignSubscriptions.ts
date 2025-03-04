import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index(
  "campaign_subscriptions_campaign_name_user_id_unique",
  ["campaignName", "userId"],
  { unique: true }
)
@Index("campaign_subscriptions_code_index", ["code"], {})
@Index("campaign_subscriptions_user_id_index", ["userId"], {})
@Entity("campaign_subscriptions", { schema: "modema" })
export class CampaignSubscriptions {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "campaign_name", nullable: true, length: 191 })
  campaignName: string | null;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", {
    name: "code",
    nullable: true,
    unsigned: true,
    default: () => "'1001'",
  })
  code: number | null;

  @ManyToOne(() => Users, (users) => users.campaignSubscriptions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
