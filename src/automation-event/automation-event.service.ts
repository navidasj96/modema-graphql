import { Injectable } from '@nestjs/common';
import { CreateAutomationEventInput } from './dto/create-automation-event.input';
import { UpdateAutomationEventInput } from './dto/update-automation-event.input';

@Injectable()
export class AutomationEventService {
  create(createAutomationEventInput: CreateAutomationEventInput) {
    return 'This action adds a new automationEvent';
  }

  findAll() {
    return `This action returns all automationEvent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} automationEvent`;
  }

  update(id: number, updateAutomationEventInput: UpdateAutomationEventInput) {
    return `This action updates a #${id} automationEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} automationEvent`;
  }
}
