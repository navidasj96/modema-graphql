import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("campaign_voting_image_users_user_id_index", ["userId"], {})
@Index(
  "campaign_voting_image_users_wallet_charged_index",
  ["walletCharged"],
  {}
)
@Entity("campaign_voting_image_users", { schema: "mydatabase" })
export class CampaignVotingImageUsers {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "voted_campaign_image_ids",
    nullable: true,
    length: 191,
  })
  votedCampaignImageIds: string | null;

  @Column("tinyint", { name: "wallet_charged", width: 1, default: () => "'0'" })
  walletCharged: boolean;

  @Column("decimal", {
    name: "charged_amount",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  chargedAmount: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.campaignVotingImageUsers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
