import { Module } from '@nestjs/common';
import { ScreenShareService } from './screen-share.service';
import { ScreenShareController } from './screen-share.controller';

@Module({
  controllers: [ScreenShareController],
  providers: [ScreenShareService],
})
export class ScreenShareModule {}
