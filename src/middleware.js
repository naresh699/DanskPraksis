import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Allow access to login page, API routes, and static assets
    if (
        pathname === '/login' ||
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/favicon') ||
        pathname.endsWith('.ico') ||
        pathname.endsWith('.png') ||
        pathname.endsWith('.jpg')
    ) {
        return NextResponse.next();
    }

    // Check for auth cookie
    const authToken = request.cookies.get('dansk-auth-token');

    if (!authToken || authToken.value !== (process.env.AUTH_SECRET || 'dansk-praksis-secret-2026')) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    // Protect /admin routes
    if (pathname.startsWith('/admin')) {
        const roleCookie = request.cookies.get('dansk-user-role');
        if (roleCookie?.value !== 'admin') {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
