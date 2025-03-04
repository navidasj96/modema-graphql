import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IncredibleOffers } from "./IncredibleOffers";
import { ProductColorImages } from "./ProductColorImages";
import { ProductColorSales } from "./ProductColorSales";
import { ProductVideo } from "./ProductVideo";
import { Products } from "./Products";
import { Subproducts } from "./Subproducts";
import { TorobProducts } from "./TorobProducts";

@Index("basic_carpet_colors_code_unique", ["code"], { unique: true })
@Index("basic_carpet_colors_russian_title_unique", ["russianTitle"], {
  unique: true,
})
@Index("basic_carpet_colors_short_code_unique", ["shortCode"], { unique: true })
@Index("basic_carpet_colors_spanish_title_unique", ["spanishTitle"], {
  unique: true,
})
@Index("basic_carpet_colors_title_unique", ["title"], { unique: true })
@Index("sort_order", ["sortOrder"], {})
@Entity("basic_carpet_colors", { schema: "modema" })
export class BasicCarpetColors {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", unique: true, length: 191 })
  title: string;

  @Column("varchar", { name: "code", unique: true, length: 2 })
  code: string;

  @Column("varchar", {
    name: "short_code",
    nullable: true,
    unique: true,
    length: 191,
  })
  shortCode: string | null;

  @Column("varchar", { name: "color_code", nullable: true, length: 191 })
  colorCode: string | null;

  @Column("varchar", {
    name: "russian_title",
    nullable: true,
    unique: true,
    length: 191,
  })
  russianTitle: string | null;

  @Column("varchar", { name: "persian_title", nullable: true, length: 191 })
  persianTitle: string | null;

  @Column("varchar", { name: "english_title", nullable: true, length: 191 })
  englishTitle: string | null;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("varchar", {
    name: "spanish_title",
    nullable: true,
    unique: true,
    length: 191,
  })
  spanishTitle: string | null;

  @OneToMany(
    () => IncredibleOffers,
    (incredibleOffers) => incredibleOffers.basicCarpetColor
  )
  incredibleOffers: IncredibleOffers[];

  @OneToMany(
    () => ProductColorImages,
    (productColorImages) => productColorImages.basicCarpetColor
  )
  productColorImages: ProductColorImages[];

  @OneToMany(
    () => ProductColorSales,
    (productColorSales) => productColorSales.basicCarpetColor
  )
  productColorSales: ProductColorSales[];

  @OneToMany(
    () => ProductVideo,
    (productVideo) => productVideo.basicCarpetColor
  )
  productVideos: ProductVideo[];

  @OneToMany(() => Products, (products) => products.bestSellerColor)
  products: Products[];

  @OneToMany(() => Subproducts, (subproducts) => subproducts.basicCarpetColor)
  subproducts: Subproducts[];

  @OneToMany(
    () => TorobProducts,
    (torobProducts) => torobProducts.basicCarpetColor
  )
  torobProducts: TorobProducts[];
}
