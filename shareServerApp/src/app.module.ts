import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RobotModule } from './robot/robot.module';
import { ScreenShareModule } from './screen-share/screen-share.module';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RobotModule,
    ScreenShareModule,
    JwtModule.register({
      secret: 'SECRET_아무거나', // JWT 서명에 사용할 비밀 키
      signOptions: { expiresIn: '60s' }, // JWT 만료 시간
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtAuthGuard],
})
export class AppModule {}
