import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ModemaAccelerators } from "./ModemaAccelerators";

@Index(
  "modema_accelerator_videos_modema_accelerator_id_index",
  ["modemaAcceleratorId"],
  {}
)
@Entity("modema_accelerator_videos", { schema: "modema" })
export class ModemaAcceleratorVideos {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "type", length: 191 })
  type: string;

  @Column("varchar", { name: "filename", length: 191 })
  filename: string;

  @Column("varchar", { name: "mime", length: 191 })
  mime: string;

  @Column("varchar", { name: "original_filename", length: 191 })
  originalFilename: string;

  @Column("varchar", { name: "upload_source", length: 191 })
  uploadSource: string;

  @Column("varchar", { name: "path", length: 191, default: () => "'/'" })
  path: string;

  @Column("varchar", { name: "alt_text", nullable: true, length: 191 })
  altText: string | null;

  @Column("int", {
    name: "modema_accelerator_id",
    nullable: true,
    unsigned: true,
  })
  modemaAcceleratorId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => ModemaAccelerators,
    (modemaAccelerators) => modemaAccelerators.modemaAcceleratorVideos,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "modema_accelerator_id", referencedColumnName: "id" }])
  modemaAccelerator: ModemaAccelerators;
}
