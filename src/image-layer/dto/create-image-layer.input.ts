import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateImageLayerInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  designId: number;

  @Field(() => Float)
  centerX: number;

  @Field(() => Float)
  centerY: number;

  @Field(() => Float)
  scaleX: number;

  @Field(() => Float)
  scaleY: number;

  @Field(() => Int)
  sortOrder: number;

  @Field(() => Float)
  rotation: number;

  @Field()
  filename: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => Designs)
  design: Designs;
}
