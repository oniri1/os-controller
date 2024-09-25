import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RobotModule } from './robot/robot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RobotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
