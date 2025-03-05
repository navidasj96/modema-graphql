import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetDesignerInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field()
  sortOrder: number | null;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  selfEmployed: boolean | null;

  @Field()
  userId: number | null;

  @Field()
  countryId: number | null;

  @Field()
  stateId: number | null;

  @Field()
  cityId: number | null;

  @Field()
  facebookId: string | null;

  @Field()
  twitterId: string | null;

  @Field()
  linkedinId: string | null;

  @Field()
  instagramId: string | null;

  @Field()
  headerImage: string | null;

  @Field()
  profilePicture: string | null;

  @Field()
  description: string | null;

  @Field()
  pricePercentage: number | null;

  @Field()
  city: Cities;

  @Field()
  country: Countries;

  @Field()
  state: States;

  @Field()
  user: Users;

  @Field()
  subproducts: Subproducts[];
}
