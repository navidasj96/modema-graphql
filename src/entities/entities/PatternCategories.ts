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
import { Patterns } from "./Patterns";

@Index("pattern_categories_image_id_index", ["imageId"], {})
@Entity("pattern_categories", { schema: "mydatabase" })
export class PatternCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @Column("int", {
    name: "view_counter",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  viewCounter: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Images, (images) => images.patternCategories, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @OneToMany(() => Patterns, (patterns) => patterns.patternCategory)
  patterns: Patterns[];
}
