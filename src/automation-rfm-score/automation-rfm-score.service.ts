import { Injectable } from '@nestjs/common';
import { CreateAutomationRfmScoreInput } from './dto/create-automation-rfm-score.input';
import { UpdateAutomationRfmScoreInput } from './dto/update-automation-rfm-score.input';

@Injectable()
export class AutomationRfmScoreService {
  create(createAutomationRfmScoreInput: CreateAutomationRfmScoreInput) {
    return 'This action adds a new automationRfmScore';
  }

  findAll() {
    return `This action returns all automationRfmScore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} automationRfmScore`;
  }

  update(id: number, updateAutomationRfmScoreInput: UpdateAutomationRfmScoreInput) {
    return `This action updates a #${id} automationRfmScore`;
  }

  remove(id: number) {
    return `This action removes a #${id} automationRfmScore`;
  }
}
