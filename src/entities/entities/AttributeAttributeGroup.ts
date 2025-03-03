import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AttributeGroups } from "./AttributeGroups";
import { Attributes } from "./Attributes";

@Index(
  "attribute_attribute_group_attribute_group_id_index",
  ["attributeGroupId"],
  {}
)
@Index("attribute_attribute_group_attribute_id_index", ["attributeId"], {})
@Entity("attribute_attribute_group", { schema: "mydatabase" })
export class AttributeAttributeGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "attribute_id", unsigned: true })
  attributeId: number;

  @Column("int", { name: "attribute_group_id", unsigned: true })
  attributeGroupId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => AttributeGroups,
    (attributeGroups) => attributeGroups.attributeAttributeGroups,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "attribute_group_id", referencedColumnName: "id" }])
  attributeGroup: AttributeGroups;

  @ManyToOne(
    () => Attributes,
    (attributes) => attributes.attributeAttributeGroups,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "attribute_id", referencedColumnName: "id" }])
  attribute: Attributes;
}
