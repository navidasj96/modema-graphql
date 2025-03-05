import { CreateAutomationEventInput } from './create-automation-event.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAutomationEventInput extends PartialType(CreateAutomationEventInput) {
  @Field(() => Int)
  id: number;
}
