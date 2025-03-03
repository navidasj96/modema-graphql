import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subproducts } from "./Subproducts";
import { Videos } from "./Videos";

@Index("subproduct_video_subproduct_id_index", ["subproductId"], {})
@Index("subproduct_video_video_id_index", ["videoId"], {})
@Index(
  "subproduct_video_video_id_subproduct_id_unique",
  ["videoId", "subproductId"],
  { unique: true }
)
@Entity("subproduct_video", { schema: "mydatabase" })
export class SubproductVideo {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "video_id", unsigned: true })
  videoId: number;

  @Column("int", { name: "subproduct_id", unsigned: true })
  subproductId: number;

  @Column("int", {
    name: "sort_order",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sortOrder: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.subproductVideos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;

  @ManyToOne(() => Videos, (videos) => videos.subproductVideos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "video_id", referencedColumnName: "id" }])
  video: Videos;
}
