import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hasToken = request.cookies.has('admin_token');
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login');

  if (request.nextUrl.pathname.startsWith('/admin') && !isLoginPage && !hasToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  if (isLoginPage && hasToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};