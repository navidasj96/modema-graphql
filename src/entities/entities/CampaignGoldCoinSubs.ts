import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("campaign_gold_coin_subs_user_id_unique", ["userId"], { unique: true })
@Entity("campaign_gold_coin_subs", { schema: "modema" })
export class CampaignGoldCoinSubs {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "user_id", unique: true, unsigned: true })
  userId: number;

  @OneToOne(() => Users, (users) => users.campaignGoldCoinSubs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
