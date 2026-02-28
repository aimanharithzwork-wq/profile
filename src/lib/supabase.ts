import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Check if variables are missing or use placeholder values
    if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your-supabase-url' || supabaseKey === 'your-supabase-anon-key') {
        console.warn('Supabase credentials missing or invalid. Using mock data instead.');
        return null;
    }

    return createBrowserClient(supabaseUrl, supabaseKey);
}
