import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDesignInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  carpetShapeId?: number;

  @Field(() => Int, { nullable: true })
  carpetMaterialId?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  backgroundColor?: string;

  @Field({ nullable: true })
  borderColor?: string;

  @Field({ nullable: true })
  fringeColor?: string;

  @Field(() => Float, { nullable: true })
  width?: number;

  @Field(() => Float, { nullable: true })
  length?: number;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => CarpetMaterials)
  carpetMaterial: CarpetMaterials;

  @Field(() => CarpetShapes)
  carpetShape: CarpetShapes;

  @Field(() => Users)
  user: Users;

  @Field(() => [ImageLayers])
  imageLayers: ImageLayers[];

  @Field(() => [InvoiceProductHistories])
  invoiceProductHistories: InvoiceProductHistories[];

  @Field(() => [InvoiceProducts])
  invoiceProducts: InvoiceProducts[];

  @Field(() => [PatternLayers])
  patternLayers: PatternLayers[];

  @Field(() => [TextLayers])
  textLayers: TextLayers[];

  @Field(() => [UserCarts])
  userCarts: UserCarts[];
}
