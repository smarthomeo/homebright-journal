import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Initializing Supabase client with:');
console.log('- URL:', supabaseUrl ? 'Present' : 'Missing');
console.log('- Key:', supabaseKey ? 'Present' : 'Missing');

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables are missing. Please check your .env file and ensure it contains:');
  console.error('VITE_SUPABASE_URL=your_project_url');
  console.error('VITE_SUPABASE_ANON_KEY=your_anon_key');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseKey || ''
);

export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseKey;
};