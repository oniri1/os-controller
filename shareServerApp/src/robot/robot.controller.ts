import { Controller, Get } from '@nestjs/common';
import { RobotService } from './robot.service';

@Controller('robot')
export class RobotController {
  constructor(private readonly robotService: RobotService) {}

  @Get()
  getHello(): string {
    return this.robotService.test();
  }
}
