import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarpetUsagePlaceInput {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CarpetUsagePlaceInvoiceProduct])
  carpetUsagePlaceInvoiceProducts: CarpetUsagePlaceInvoiceProduct[];

  @Field(() => [CarpetUsagePlaceUser])
  carpetUsagePlaceUsers: CarpetUsagePlaceUser[];
}
