import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/blog/specialblog', request.url))
    }
}

// export const config = {
//   matcher: '/blog',
// }