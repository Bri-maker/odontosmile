
// =====================================
// ODONTOSMILE - CONEXIÓN SUPABASE
// =====================================

const SUPABASE_URL = "TU_URL_DE_SUPABASE";

const SUPABASE_ANON_KEY = "TU_CLAVE_PUBLICA_ANON";

let supabaseClient = null;

if (window.supabase) {

  if (
    SUPABASE_URL !== "TU_URL_DE_SUPABASE" &&
    SUPABASE_ANON_KEY !== "TU_CLAVE_PUBLICA_ANON"
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
