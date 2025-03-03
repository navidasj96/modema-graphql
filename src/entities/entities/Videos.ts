import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerVideoProduct } from './CustomerVideoProduct';
import { ProductVideo } from './ProductVideo';
import { ReturnRequestItemVideos } from './ReturnRequestItemVideos';
import { SubproductVideo } from './SubproductVideo';
import { Subproducts } from './Subproducts';

@Entity('videos', { schema: 'mydatabase' })
export class Videos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'mime', length: 191 })
  mime: string;

  @Column('varchar', { name: 'original_filename', length: 191 })
  originalFilename: string;

  @Column('varchar', { name: 'upload_source', length: 191 })
  uploadSource: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('varchar', { name: 'alt_text', nullable: true, length: 191 })
  altText: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => CustomerVideoProduct,
    (customerVideoProduct) => customerVideoProduct.video,
  )
  customerVideoProducts: CustomerVideoProduct[];

  @OneToMany(() => ProductVideo, (productVideo) => productVideo.video)
  productVideos: ProductVideo[];

  @OneToMany(
    () => ReturnRequestItemVideos,
    (returnRequestItemVideos) => returnRequestItemVideos.video,
  )
  returnRequestItemVideos: ReturnRequestItemVideos[];

  @OneToMany(() => SubproductVideo, (subproductVideo) => subproductVideo.video)
  subproductVideos: SubproductVideo[];

  @OneToMany(() => Subproducts, (subproducts) => subproducts.video)
  subproducts: Subproducts[];
}
