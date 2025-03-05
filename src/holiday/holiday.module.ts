import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { HolidayResolver } from './holiday.resolver';

@Module({
  providers: [HolidayResolver, HolidayService],
})
export class HolidayModule {}
