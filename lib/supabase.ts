import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wqqjxjvlyvnssxdottrc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxcWp4anZseXZuc3N4ZG90dHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxNzE0MjAsImV4cCI6MjA4MTc0NzQyMH0.HJrLkLp3nz1auZUZZsWI2JwTJf0hjlQtZPA3-qhliTw';

export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export const isSupabaseConnected = () => !!supabase;