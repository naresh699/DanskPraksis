import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Check credentials against environment variables
        // Format: USERS=email1:password1,email2:password2
        const usersEnv = process.env.USERS || 'admin@dansk.dk:dansk2026';
        const users = usersEnv.split(',').map(u => {
            const [e, p] = u.trim().split(':');
            return { email: e, password: p };
        });

        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        // Set auth cookie
        const authSecret = process.env.AUTH_SECRET || 'dansk-praksis-secret-2026';
        const response = NextResponse.json({ success: true, email: user.email });

        response.cookies.set('dansk-auth-token', authSecret, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
