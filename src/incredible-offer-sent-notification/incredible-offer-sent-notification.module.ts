import { Module } from '@nestjs/common';
import { IncredibleOfferSentNotificationService } from './incredible-offer-sent-notification.service';
import { IncredibleOfferSentNotificationResolver } from './incredible-offer-sent-notification.resolver';

@Module({
  providers: [IncredibleOfferSentNotificationResolver, IncredibleOfferSentNotificationService],
})
export class IncredibleOfferSentNotificationModule {}
