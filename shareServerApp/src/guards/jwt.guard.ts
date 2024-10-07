import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    console.log(token);

    if (!token) {
      throw new ForbiddenException('토큰 없다..');
    }

    try {
      const user = this.jwtService.verify(token);
      request.user = user; // 인증된 사용자 정보 저장
      return true;
    } catch (error) {
      throw new ForbiddenException('토큰이 우리거가 아닌데?');
    }
  }
}
