import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Images } from './Images';
import { Products } from './Products';

@Index(
  'home_page_customer_images_desktop_image_id_foreign',
  ['desktopImageId'],
  {},
)
@Index(
  'home_page_customer_images_mobile_image_id_foreign',
  ['mobileImageId'],
  {},
)
@Index('home_page_customer_images_product_id_index', ['productId'], {})
@Entity('home_page_customer_images', { schema: 'modema' })
export class HomePageCustomerImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'mobile_image_id', nullable: true, unsigned: true })
  mobileImageId: number | null;

  @Column('int', { name: 'desktop_image_id', nullable: true, unsigned: true })
  desktopImageId: number | null;

  @Column('int', { name: 'sort_order', unsigned: true })
  sortOrder: number;

  @Column('varchar', { name: 'desktop_image_alt', nullable: true, length: 191 })
  desktopImageAlt: string | null;

  @Column('varchar', { name: 'mobile_image_alt', nullable: true, length: 191 })
  mobileImageAlt: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId: number | null;

  @ManyToOne(() => Images, (images) => images.homePageCustomerImages, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'desktop_image_id', referencedColumnName: 'id' }])
  desktopImage: Images;

  @ManyToOne(() => Images, (images) => images.homePageCustomerImages2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mobile_image_id', referencedColumnName: 'id' }])
  mobileImage: Images;

  @ManyToOne(() => Products, (products) => products.homePageCustomerImages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Products;
}
