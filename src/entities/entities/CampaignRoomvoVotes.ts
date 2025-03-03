import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CampaignRoomvoImages } from "./CampaignRoomvoImages";
import { Users } from "./Users";

@Index(
  "campaign_roomvo_votes_campaign_roomvo_image_id_index",
  ["campaignRoomvoImageId"],
  {}
)
@Index("campaign_roomvo_votes_user_id_index", ["userId"], {})
@Entity("campaign_roomvo_votes", { schema: "mydatabase" })
export class CampaignRoomvoVotes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "campaign_roomvo_image_id", unsigned: true })
  campaignRoomvoImageId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => CampaignRoomvoImages,
    (campaignRoomvoImages) => campaignRoomvoImages.campaignRoomvoVotes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "campaign_roomvo_image_id", referencedColumnName: "id" },
  ])
  campaignRoomvoImage: CampaignRoomvoImages;

  @ManyToOne(() => Users, (users) => users.campaignRoomvoVotes, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
