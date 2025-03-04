import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { CampaignRoomvoVotes } from "./CampaignRoomvoVotes";

@Index("campaign_roomvo_images_user_id_index", ["userId"], {})
@Index("campaign_roomvo_images_votes_count_index", ["votesCount"], {})
@Entity("campaign_roomvo_images", { schema: "modema" })
export class CampaignRoomvoImages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "votes_count", unsigned: true, default: () => "'0'" })
  votesCount: number;

  @Column("varchar", { name: "path", nullable: true, length: 191 })
  path: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 191 })
  filename: string | null;

  @Column("varchar", { name: "original_filename", nullable: true, length: 191 })
  originalFilename: string | null;

  @Column("varchar", { name: "mime", nullable: true, length: 191 })
  mime: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.campaignRoomvoImages, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(
    () => CampaignRoomvoVotes,
    (campaignRoomvoVotes) => campaignRoomvoVotes.campaignRoomvoImage
  )
  campaignRoomvoVotes: CampaignRoomvoVotes[];
}
