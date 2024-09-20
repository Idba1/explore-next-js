import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.rewrite(new URL('/blog/specialblog', request.url))
}
 
export const config = {
  matcher: '/blog',
}