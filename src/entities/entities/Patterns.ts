import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PatternLayers } from "./PatternLayers";
import { PatternCategories } from "./PatternCategories";

@Index("patterns_pattern_category_id_index", ["patternCategoryId"], {})
@Entity("patterns", { schema: "modema" })
export class Patterns {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "pattern_category_id", unsigned: true })
  patternCategoryId: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("text", {
    name: "keywords",
    nullable: true,
    comment: "comma separated",
  })
  keywords: string | null;

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

  @Column("varchar", { name: "filename", nullable: true, length: 191 })
  filename: string | null;

  @Column("varchar", {
    name: "thumbnail_filename",
    nullable: true,
    length: 191,
  })
  thumbnailFilename: string | null;

  @Column("varchar", { name: "mime", nullable: true, length: 191 })
  mime: string | null;

  @Column("varchar", { name: "original_filename", nullable: true, length: 191 })
  originalFilename: string | null;

  @Column("varchar", { name: "path", length: 191, default: () => "'/'" })
  path: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => PatternLayers, (patternLayers) => patternLayers.pattern)
  patternLayers: PatternLayers[];

  @ManyToOne(
    () => PatternCategories,
    (patternCategories) => patternCategories.patterns,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "pattern_category_id", referencedColumnName: "id" }])
  patternCategory: PatternCategories;
}
