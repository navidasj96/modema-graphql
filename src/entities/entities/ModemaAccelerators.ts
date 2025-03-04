import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModemaAcceleratorImages } from "./ModemaAcceleratorImages";
import { ModemaAcceleratorVideos } from "./ModemaAcceleratorVideos";

@Entity("modema_accelerators", { schema: "modema" })
export class ModemaAccelerators {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "city", length: 191 })
  city: string;

  @Column("varchar", { name: "job_category", length: 191 })
  jobCategory: string;

  @Column("varchar", { name: "phone", length: 191 })
  phone: string;

  @Column("varchar", { name: "has_office", length: 191 })
  hasOffice: string;

  @Column("varchar", { name: "pro", length: 191 })
  pro: string;

  @Column("varchar", { name: "instagram", length: 191 })
  instagram: string;

  @Column("text", { name: "details" })
  details: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ModemaAcceleratorImages,
    (modemaAcceleratorImages) => modemaAcceleratorImages.modemaAccelerator
  )
  modemaAcceleratorImages: ModemaAcceleratorImages[];

  @OneToMany(
    () => ModemaAcceleratorVideos,
    (modemaAcceleratorVideos) => modemaAcceleratorVideos.modemaAccelerator
  )
  modemaAcceleratorVideos: ModemaAcceleratorVideos[];
}
