import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./Images";
import { SizeGuidesDetails } from "./SizeGuidesDetails";

@Index("size_guides_image_id_index", ["imageId"], {})
@Index("size_guides_title_index", ["title"], {})
@Entity("size_guides", { schema: "modema" })
export class SizeGuides {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", length: 191 })
  title: string;

  @Column("text", { name: "text" })
  text: string;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Images, (images) => images.sizeGuides, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @OneToMany(
    () => SizeGuidesDetails,
    (sizeGuidesDetails) => sizeGuidesDetails.sizeGuide
  )
  sizeGuidesDetails: SizeGuidesDetails[];
}
