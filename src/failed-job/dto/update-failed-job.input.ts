import { CreateFailedJobInput } from './create-failed-job.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFailedJobInput extends PartialType(CreateFailedJobInput) {
  @Field(() => Int)
  id: number;
}
