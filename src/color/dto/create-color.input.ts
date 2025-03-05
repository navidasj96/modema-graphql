import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateColorInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  colorName?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  hexCode?: string;

  @Field({ nullable: true })
  colorCodeOriginal?: string;

  @Field(() => [Subcolors])
  subcolors: Subcolors[];
}
