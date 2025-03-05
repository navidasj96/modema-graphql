import { CreateImpersonateHistoryInput } from './create-impersonate-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImpersonateHistoryInput extends PartialType(CreateImpersonateHistoryInput) {
  @Field(() => Int)
  id: number;
}
