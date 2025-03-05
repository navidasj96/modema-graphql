import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Subcolors } from './Subcolors';

@ObjectType()
export class Color {
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
