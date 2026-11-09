
// =====================================
// ODONTOSMILE - CONEXIÓN SUPABASE
// =====================================

const SUPABASE_URL = "https://nwcqmahpabsyhvhujzyp.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_mvszHxfWJvzTskJ2-6wlGQ_1_yqhcZR";

// Crear conexión con Supabase
let supabaseClient = null;

if (window.supabase) {

    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    console.log("OdontoSmile: Supabase conectado correctamente.");

} else {

    console.error(
        "OdontoSmile: No se pudo cargar la biblioteca de Supabase."
    );

}
