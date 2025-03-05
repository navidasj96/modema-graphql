import { Module } from '@nestjs/common';
import { InvitationCodeService } from './invitation-code.service';
import { InvitationCodeResolver } from './invitation-code.resolver';

@Module({
  providers: [InvitationCodeResolver, InvitationCodeService],
})
export class InvitationCodeModule {}
