import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AttributeGroups } from "./AttributeGroups";
import { Attributes } from "./Attributes";
import { AttributeProduct } from "./AttributeProduct";
import { AttributeSubproduct } from "./AttributeSubproduct";

@Index("attribute_group_id", ["attributeGroupId"], {})
@Index("attribute_items_attribute_id_index", ["attributeId"], {})
@Entity("attribute_items", { schema: "modema" })
export class AttributeItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "attribute_id", unsigned: true })
  attributeId: number;

  @Column("int", { name: "attribute_group_id", nullable: true, unsigned: true })
  attributeGroupId: number | null;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => AttributeGroups,
    (attributeGroups) => attributeGroups.attributeItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "attribute_group_id", referencedColumnName: "id" }])
  attributeGroup: AttributeGroups;

  @ManyToOne(() => Attributes, (attributes) => attributes.attributeItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "attribute_id", referencedColumnName: "id" }])
  attribute: Attributes;

  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.attributeItem
  )
  attributeProducts: AttributeProduct[];

  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.attributeItem
  )
  attributeSubproducts: AttributeSubproduct[];
}
