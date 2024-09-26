import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RobotModule } from './robot/robot.module';
import { ScreenShareModule } from './screen-share/screen-share.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RobotModule,
    ScreenShareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
