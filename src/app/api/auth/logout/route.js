import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ success: true });
    response.cookies.delete('dansk-auth-token');
    response.cookies.delete('dansk-user-role');
    return response;
}
