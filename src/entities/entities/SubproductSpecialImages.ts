import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./Images";
import { Subproducts } from "./Subproducts";

@Index("subproduct_special_images_image_id_index", ["imageId"], {})
@Index("subproduct_special_images_subproduct_id_index", ["subproductId"], {})
@Entity("subproduct_special_images", { schema: "modema" })
export class SubproductSpecialImages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "image_id", unsigned: true })
  imageId: number;

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

  @ManyToOne(() => Images, (images) => images.subproductSpecialImages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.subproductSpecialImages,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
