import { NextResponse } from 'next/server';

const co = 'hello';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log(request.cookies.get('token'));

    const cookies = request.cookies.get('token');

    if (!cookies || cookies.value !== co) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/blog',
};
