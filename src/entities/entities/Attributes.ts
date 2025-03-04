import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AttributeAttributeGroup } from "./AttributeAttributeGroup";
import { AttributeItems } from "./AttributeItems";
import { AttributeProduct } from "./AttributeProduct";
import { AttributeSubproduct } from "./AttributeSubproduct";

@Index("attributes_name_unique", ["name"], { unique: true })
@Entity("attributes", { schema: "modema" })
export class Attributes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("int", {
    name: "type",
    comment: "0=>text,1=>boolean,2=>select",
    default: () => "'0'",
  })
  type: number;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => AttributeAttributeGroup,
    (attributeAttributeGroup) => attributeAttributeGroup.attribute
  )
  attributeAttributeGroups: AttributeAttributeGroup[];

  @OneToMany(() => AttributeItems, (attributeItems) => attributeItems.attribute)
  attributeItems: AttributeItems[];

  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.attribute
  )
  attributeProducts: AttributeProduct[];

  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.attribute
  )
  attributeSubproducts: AttributeSubproduct[];
}
