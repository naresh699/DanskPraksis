import { kv } from '@vercel/kv';
import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL === '1' || !!process.env.KV_REST_API_URL;
let localDbPath = '';

// On Vercel, we can't write to the filesystem reliably.
// Locally, we use a file in the project root.
if (!isVercel) {
    localDbPath = path.join(process.cwd(), 'users.json');
    if (!fs.existsSync(localDbPath)) {
        fs.writeFileSync(localDbPath, JSON.stringify([
            { email: 'admin@dansk.dk', password: 'dansk2026', role: 'admin' },
            { email: 'student@dansk.dk', password: 'student2026', role: 'student' }
        ]));
    }
}

export async function getUsers() {
    if (isVercel) {
        try {
            const users = await kv.get('dansk_users');
            if (!users) {
                // Default admin for Vercel if KV is empty
                return [{ email: 'admin@dansk.dk', password: 'dansk2026', role: 'admin' }];
            }
            return Array.isArray(users) ? users : [];
        } catch (error) {
            console.error('KV Error:', error);
            return [{ email: 'admin@dansk.dk', password: 'dansk2026', role: 'admin' }];
        }
    } else {
        try {
            const data = fs.readFileSync(localDbPath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            return [{ email: 'admin@dansk.dk', password: 'dansk2026', role: 'admin' }];
        }
    }
}

export async function saveUsers(users) {
    if (isVercel) {
        try {
            if (!process.env.KV_REST_API_URL) {
                console.error('KV_REST_API_URL is missing. Cannot save to Vercel KV.');
                throw new Error('Vercel KV is not configured (missing KV_REST_API_URL). Please set up Vercel KV in your project dashboard.');
            }
            await kv.set('dansk_users', users);
        } catch (error) {
            console.error('KV Save Error:', error);
            throw error;
        }
    } else {
        fs.writeFileSync(localDbPath, JSON.stringify(users, null, 2));
    }
}
