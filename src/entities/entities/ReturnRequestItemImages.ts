import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./Images";
import { ReturnRequestItems } from "./ReturnRequestItems";

@Index("return_request_item_image_unique", ["returnRequestItemId", "imageId"], {
  unique: true,
})
@Index("return_request_item_images_image_id_index", ["imageId"], {})
@Index(
  "return_request_item_images_return_request_item_id_index",
  ["returnRequestItemId"],
  {}
)
@Entity("return_request_item_images", { schema: "mydatabase" })
export class ReturnRequestItemImages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "return_request_item_id", unsigned: true })
  returnRequestItemId: number;

  @Column("int", { name: "image_id", unsigned: true })
  imageId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Images, (images) => images.returnRequestItemImages, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(
    () => ReturnRequestItems,
    (returnRequestItems) => returnRequestItems.returnRequestItemImages,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_request_item_id", referencedColumnName: "id" }])
  returnRequestItem: ReturnRequestItems;
}
