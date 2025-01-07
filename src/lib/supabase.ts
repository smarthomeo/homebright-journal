import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseKey);

// Provide default values for development to prevent crashes
const defaultUrl = 'https://your-project.supabase.co';
const defaultKey = 'your-anon-key';

export const supabase = createClient(
  supabaseUrl || defaultUrl,
  supabaseKey || defaultKey
);

// Export a helper function to check if credentials are properly configured
export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseKey;
};