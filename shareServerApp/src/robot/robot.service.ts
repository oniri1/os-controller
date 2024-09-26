import { Injectable } from '@nestjs/common';
import * as control from 'robotjs';

@Injectable()
export class RobotService {
  test() {
    const {
      dragMouse,
      mouseClick,
      mouseToggle,
      moveMouse,
      getScreenSize,
      screen,
    } = control;

    const buf = screen.capture();

    console.log(buf);

    return 'ok';
  }
}
