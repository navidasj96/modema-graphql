import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateImagesSizeGuidesDetailInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  imageId?: number;

  @Field(() => Int)
  sizeGuidesDetailsId: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Images)
  image: Images;

  @Field(() => SizeGuidesDetails)
  sizeGuidesDetails: SizeGuidesDetails;
}
