import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Por enquanto, permitir acesso a todas as rotas
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/contacts/:path*',
    '/companies/:path*',
    '/pipeline/:path*',
    '/activities/:path*',
    '/auth/:path*',
  ],
}; 