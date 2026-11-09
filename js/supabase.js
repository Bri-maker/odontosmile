
// =====================================
// ODONTOSMILE - CONEXIÓN SUPABASE
// =====================================

const SUPABASE_URL = "https://nwcqmahpabsyhvhujzyp.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_mvszHxfWJvzTskJ2-6wlGQ_1_yqhcZR";

let supabaseClient = null;

if (window.supabase) {

  if (
    SUPABASE_URL !== "https://nwcqmahpabsyhvhujzyp.supabase.co" &&
    SUPABASE_ANON_KEY !== "sb_publishable_mvszHxfWJvzTskJ2-6wlGQ_1_yqhcZR"
  ) {

    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY
    );

    console.log("OdontoSmile: Supabase conectado correctamente.");

  } else {

    console.warn(
      "OdontoSmile: Falta configurar la URL y la clave pública de Supabase."
    );

  }

} else {

  console.error("No se pudo cargar la biblioteca de Supabase.");

}
