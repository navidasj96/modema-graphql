import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./Images";
import { SizeGuidesDetails } from "./SizeGuidesDetails";

@Index("images_size_guides_details_image_id_index", ["imageId"], {})
@Index(
  "images_size_guides_details_size_guides_details_id_index",
  ["sizeGuidesDetailsId"],
  {}
)
@Entity("images_size_guides_details", { schema: "modema" })
export class ImagesSizeGuidesDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("int", { name: "size_guides_details_id", unsigned: true })
  sizeGuidesDetailsId: number;

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

  @ManyToOne(() => Images, (images) => images.imagesSizeGuidesDetails, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(
    () => SizeGuidesDetails,
    (sizeGuidesDetails) => sizeGuidesDetails.imagesSizeGuidesDetails,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "size_guides_details_id", referencedColumnName: "id" }])
  sizeGuidesDetails: SizeGuidesDetails;
}
