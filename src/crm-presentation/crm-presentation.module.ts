import { Module } from '@nestjs/common';
import { CrmPresentationService } from './crm-presentation.service';
import { CrmPresentationResolver } from './crm-presentation.resolver';

@Module({
  providers: [CrmPresentationResolver, CrmPresentationService],
})
export class CrmPresentationModule {}
