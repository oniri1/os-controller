import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}

  private async validateUser(username: string, password: string) {
    // 사용자 인증 로직 구현
    // 여기서는 단순 예시로 나중에 데이터 베이스와 연동
    if (username === 'test' && password === 'password') {
      return { username, userId: 1 }; // 인증된 사용자 반환
    }
    return null; // 인증 실패
  }

  async login(loginDto: { username: string; password: string }) {
    // 사용자 인증
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new Error('Invalid credentials'); // 인증 실패 시 에러 처리
    }

    // JWT 생성
    const payload = { username: user.username, sub: user.userId }; // payload 설정
    const accessToken = this.jwtService.sign(payload); // 엑세스 토큰 생성
    return { accessToken }; // 엑세스 토큰 반환
  }
}

// async function fetchProtectedResource() {
//   const token = localStorage.getItem('accessToken');
//   const response = await fetch('주소', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token}`, // Authorization 헤더에 엑세스 토큰 포함
//     },
//   });
//   const data = await response.json();
//   console.log(data);
// }
