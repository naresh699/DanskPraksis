import { NextResponse } from 'next/server';
import { getUsers, saveUsers } from '@/lib/db';

// Ensure user is an admin before allowing modifications
function checkAdmin(request) {
    const roleCookie = request.cookies.get('dansk-user-role');
    const tokenCookie = request.cookies.get('dansk-auth-token');

    if (!tokenCookie || tokenCookie.value !== (process.env.AUTH_SECRET || 'dansk-praksis-secret-2026')) {
        return false;
    }
    return roleCookie?.value === 'admin';
}

export async function GET(request) {
    if (!checkAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const users = await getUsers();
    return NextResponse.json(users);
}

export async function POST(request) {
    if (!checkAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const { email, password, role } = await request.json();
        if (!email || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

        const users = await getUsers();
        if (users.some(u => u.email === email)) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        users.push({ email, password, role: role || 'student' });
        await saveUsers(users);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in POST /api/admin/users:', error);
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}

export async function DELETE(request) {
    if (!checkAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });
        if (email === 'admin@dansk.dk') return NextResponse.json({ error: 'Cannot delete primary admin' }, { status: 400 });

        const users = await getUsers();
        const updatedUsers = users.filter(u => u.email !== email);

        await saveUsers(updatedUsers);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in DELETE /api/admin/users:', error);
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}
