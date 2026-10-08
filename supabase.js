const SUPABASE_URL = "https://mkfvqnzdfgnmzsregjne.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZnZxbnpkZmdubXpzcmVnam5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NjUwNDgsImV4cCI6MjEwNzA0MTA0OH0.yPVB4IccrJ0xwPwjxjaWl3UGANTNjfEvKUeKxwgoOrw";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
