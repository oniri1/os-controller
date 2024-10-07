import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(JwtAuthGuard) // 이 데코레이터를 클래스 레벨에 적용
  @Get('tokenGet')
  getToken() {
    const {} = this.appService.login({
      username: 'test',
      password: 'password',
    });
  }
}
