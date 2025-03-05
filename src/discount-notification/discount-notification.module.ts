import { Module } from '@nestjs/common';
import { DiscountNotificationService } from './discount-notification.service';
import { DiscountNotificationResolver } from './discount-notification.resolver';

@Module({
  providers: [DiscountNotificationResolver, DiscountNotificationService],
})
export class DiscountNotificationModule {}
