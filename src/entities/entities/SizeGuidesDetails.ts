import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ImagesSizeGuidesDetails } from "./ImagesSizeGuidesDetails";
import { Images } from "./Images";
import { SizeGuides } from "./SizeGuides";

@Index("size_guides_details_details_title_index", ["detailsTitle"], {})
@Index("size_guides_details_icon_title_index", ["iconTitle"], {})
@Index("size_guides_details_image_id_index", ["imageId"], {})
@Index("size_guides_details_size_guide_id_index", ["sizeGuideId"], {})
@Index("size_guides_details_title_index", ["title"], {})
@Entity("size_guides_details", { schema: "mydatabase" })
export class SizeGuidesDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", length: 191 })
  title: string;

  @Column("text", { name: "text" })
  text: string;

  @Column("varchar", { name: "icon_title", length: 191 })
  iconTitle: string;

  @Column("text", { name: "icon_text" })
  iconText: string;

  @Column("varchar", { name: "details_title", length: 191 })
  detailsTitle: string;

  @Column("text", { name: "details_text" })
  detailsText: string;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("int", { name: "size_guide_id", unsigned: true })
  sizeGuideId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ImagesSizeGuidesDetails,
    (imagesSizeGuidesDetails) => imagesSizeGuidesDetails.sizeGuidesDetails
  )
  imagesSizeGuidesDetails: ImagesSizeGuidesDetails[];

  @ManyToOne(() => Images, (images) => images.sizeGuidesDetails, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(() => SizeGuides, (sizeGuides) => sizeGuides.sizeGuidesDetails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "size_guide_id", referencedColumnName: "id" }])
  sizeGuide: SizeGuides;
}
