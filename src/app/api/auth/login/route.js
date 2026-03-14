import { NextResponse } from 'next/server';
import { getUsers } from '@/lib/db';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        const users = await getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        // Set auth cookie
        const authSecret = process.env.AUTH_SECRET || 'dansk-praksis-secret-2026';
        const response = NextResponse.json({ success: true, email: user.email, role: user.role });

        response.cookies.set('dansk-auth-token', authSecret, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
        });

        response.cookies.set('dansk-user-role', user.role || 'student', {
            httpOnly: false, // Allows reading via client JS for UI toggles if needed
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
