// middleware.js
import { NextResponse } from "next/server";

export function middleware(request: any) {
  const response = NextResponse.next(); // 다음 응답을 준비합니다.

  // CSP 헤더 추가
  response.headers.set(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline'"
  );

  return response; // 수정된 응답 반환
}

// 필요한 경로에 대해 이 middleware를 적용할 수 있습니다.
export const config = {
  matcher: "/(.*)", // 모든 경로에 대해 적용
};
