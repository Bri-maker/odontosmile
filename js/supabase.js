// ODONTOSMILE - CONEXIÓN SUPABASE

const SUPABASE_URL = "https://nwcqmahpabsyhvhujzyp.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_mvszHxfWJvzTskJ2-6wlGQ_1_yqhcZR";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("OdontoSmile: Supabase conectado correctamente.");
