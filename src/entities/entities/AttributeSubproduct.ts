import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Attributes } from "./Attributes";
import { AttributeItems } from "./AttributeItems";
import { Subproducts } from "./Subproducts";

@Index("attribute_subproduct_attribute_id_index", ["attributeId"], {})
@Index("attribute_subproduct_attribute_item_id_index", ["attributeItemId"], {})
@Index("attribute_subproduct_subproduct_id_index", ["subproductId"], {})
@Entity("attribute_subproduct", { schema: "modema" })
export class AttributeSubproduct {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "attribute_id", unsigned: true })
  attributeId: number;

  @Column("int", { name: "subproduct_id", unsigned: true })
  subproductId: number;

  @Column("int", { name: "attribute_item_id", nullable: true, unsigned: true })
  attributeItemId: number | null;

  @Column("text", { name: "value", nullable: true })
  value: string | null;

  @Column("tinyint", { name: "is_checked", nullable: true, width: 1 })
  isChecked: boolean | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => Attributes,
    (attributes) => attributes.attributeSubproducts,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "attribute_id", referencedColumnName: "id" }])
  attribute: Attributes;

  @ManyToOne(
    () => AttributeItems,
    (attributeItems) => attributeItems.attributeSubproducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "attribute_item_id", referencedColumnName: "id" }])
  attributeItem: AttributeItems;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.attributeSubproducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
