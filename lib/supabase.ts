import { createClient } from '@supabase/supabase-js';

// ------------------------------------------------------------------
// CONFIGURATION
// 1. Project URL: found in Settings > API
// 2. API Key: Use the 'anon' / 'public' key. (It usually starts with "ey...")
//    DO NOT use the 'service_role' / 'secret' key.
// ------------------------------------------------------------------

const SUPABASE_URL = 'https://wqqjxjvlyvnssxdottrc.supabase.co';

// PASTE YOUR 'anon' PUBLIC KEY HERE (It starts with "ey...")
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxcWp4anZseXZuc3N4ZG90dHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzE0MjAsImV4cCI6MjA4MTc0NzQyMH0.HJrLkLp3nz1auZUZZsWI2JwTJf0hjlQtZPA3-qhliTw'; 

// Validation check to help debug
if (SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.startsWith('ey')) {
  console.warn('⚠️ POTENTIAL CONFIG ERROR: Supabase keys usually start with "ey". You might be using the wrong key.');
}

export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export const isSupabaseConnected = () => !!supabase;