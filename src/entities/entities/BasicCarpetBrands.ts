import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subproducts } from './Subproducts';
import { Field, ObjectType } from '@nestjs/graphql';

@Index('basic_carpet_brands_code_unique', ['code'], { unique: true })
@Index('basic_carpet_brands_title_unique', ['title'], { unique: true })
@Index('sort_order', ['sortOrder'], {})
@Entity('basic_carpet_brands', { schema: 'modema' })
@ObjectType()
export class BasicCarpetBrands {
  @Field()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;
  @Field()
  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;
  @Field()
  @Column('varchar', { name: 'code', unique: true, length: 3 })
  code: string;
  @Field()
  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder: number | null;

  @Field()
  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;
  @Field()
  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @Field()
  @Column('timestamp', {
    name: 'updated_at',
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Field()
  @OneToMany(() => Subproducts, (subproducts) => subproducts.basicCarpetBrand)
  subproducts: Subproducts[];
}
